# frozen_string_literal: true

require 'rails_helper'
require 'feature/testing'

module Infrastructure
  describe CwdsAuthenticator do
    describe '#call' do
      let(:application) { instance_double('ActionDispatch::Routing::RouteSet') }
      let(:cwds_authenticator) { CwdsAuthenticator.new(application) }
      let(:security_policy) { instance_double('Infrastructure::SecurityPolicy') }

      before do
        allow(SecurityPolicy).to receive(:new).with(no_args).and_return(security_policy)
      end

      context 'when there is no session and no token' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com/', {}) }

        it 'redirects the user to perry login url' do
          allow(security_policy).to receive(:valid?)
            .with(instance_of(Rack::Request)).and_return(false)
          status, headers = cwds_authenticator.call(environment)
          expect(status).to eq 301
          expect(headers['Location']).to eq 'https://perry.test.cwds.io/authn/login?callback=http://example.com/'
        end
      end

      context 'with feature checking' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com/', {}) }

        context 'when authentication feature is active' do
          it 'checks valid authentication' do
            Feature.run_with_activated(:authentication) do
              allow(security_policy).to receive(:valid?)
                .with(instance_of(Rack::Request)).and_return(false)
              status, _headers = cwds_authenticator.call(environment)
              expect(status).to eq 301
            end
          end
        end

        context 'when authentication feature is inactive' do
          it 'skips authentication checking' do
            Feature.run_with_deactivated(:authentication) do
              allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
              status, _headers = cwds_authenticator.call(environment)
              expect(status).to eq 200
            end
          end
        end
      end

      context 'when there is a token' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com?token=sometoken', {}) }

        context 'when token is valid' do
          let(:response) { Faraday::Response.new(status: 200) }

          it 'allows user access to the application' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            status, _headers, _body = cwds_authenticator.call(environment)
            expect(status).to eq 200
          end

          it 'stores the token in the session' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            cwds_authenticator.call(environment)
            expect(Rack::Request.new(environment).session['token']).to eq 'sometoken'
          end
        end

        context 'when token is invalid' do
          let(:response) { Faraday::Response.new(status: 406) }

          it 'redirects to the perry login page' do
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(false)
            status, headers = cwds_authenticator.call(environment)
            expect(status).to eq 301
            expect(headers['Location']).to eq 'https://perry.test.cwds.io/authn/login' \
              '?callback=http://example.com/?token=sometoken'
          end
        end
      end

      context 'when there is a session' do
        context 'when session is valid' do
          let(:session_config) { { 'rack.session' => { 'token' => 'some_token' } } }
          let(:environment) { Rack::MockRequest.env_for('http://example.com', session_config) }
          let(:response) { Faraday::Response.new(status: 200) }

          it 'allows user access to the application' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            status, _headers, _body = cwds_authenticator.call(environment)
            expect(status).to eq 200
          end

          it 'does not change the session token' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            cwds_authenticator.call(environment)
            expect(Rack::Request.new(environment).session['token']).to eq 'some_token'
          end
        end

        context 'when there is a new token that is valid and an existing session' do
          let(:session_config) { { 'rack.session' => { 'token' => 'some_token' } } }
          let(:url) { 'http://example.com?token=new_token' }
          let(:environment) { Rack::MockRequest.env_for(url, session_config) }
          let(:response) { Faraday::Response.new(status: 200) }

          it 'allows user access to the application' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            status, _headers, _body = cwds_authenticator.call(environment)
            expect(status).to eq 200
          end

          it 'changes the session token' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(true)
            cwds_authenticator.call(environment)
            expect(Rack::Request.new(environment).session['token']).to eq 'new_token'
          end
        end

        context 'when session token is invalid' do
          let(:session_config) { { 'rack.session' => { 'token' => 'old_token' } } }
          let(:environment) { Rack::MockRequest.env_for('http://example.com', session_config) }
          let(:response) { Faraday::Response.new(status: 406) }

          it 'redirects to the perry login page' do
            allow(security_policy).to receive(:valid?)
              .with(instance_of(Rack::Request)).and_return(false)
            status, headers = cwds_authenticator.call(environment)
            expect(status).to eq 301
            expect(headers['Location']).to eq 'https://perry.test.cwds.io/authn/login' \
              '?callback=http://example.com/'
          end
        end
      end
    end
  end
end
