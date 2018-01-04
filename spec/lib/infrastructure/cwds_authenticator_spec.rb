# frozen_string_literal: true

require 'rails_helper'
require 'feature/testing'

module Infrastructure
  describe CwdsAuthenticator do
    describe '#call' do
      let(:application) { instance_double('ActionDispatch::Routing::RouteSet') }
      let(:cwds_authenticator) { CwdsAuthenticator.new(application) }

      context 'when there is no session and no token' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com/', {}) }

        it 'redirects the user to perry login url' do
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
        let(:security_gateway) { instance_double('Infrastructure::SecurityGateway') }

        before do
          allow(Infrastructure::SecurityGateway).to receive(:new).with(no_args)
                                                                 .and_return(security_gateway)
        end

        context 'when token is valid' do
          it 'allows user access to the application' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_gateway).to receive(:validate_token).with('sometoken').and_return({})
            status, _headers, _body = cwds_authenticator.call(environment)
            expect(status).to eq 200
          end

          it 'stores the token in the session' do
            allow(application).to receive(:call).with(environment).and_return([200, {}, {}])
            allow(security_gateway).to receive(:validate_token).with('sometoken').and_return({})
            cwds_authenticator.call(environment)
            expect(Rack::Request.new(environment).session['token']).to eq 'sometoken'
          end
        end

        context 'when token is invalid' do
          it 'redirects to the perry login page' do
            allow(security_gateway).to receive(:validate_token).with('sometoken').and_return(nil)
            status, headers = cwds_authenticator.call(environment)
            expect(status).to eq 301
            expect(headers['Location']).to eq 'https://perry.test.cwds.io/authn/login' \
              '?callback=http://example.com/?token=sometoken'
          end
        end
      end
    end
  end
end
