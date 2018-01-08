# frozen_string_literal: true

require 'rails_helper'

module Infrastructure
  describe SecurityPolicy do
    describe '#valid?' do
      let(:environment) { Rack::MockRequest.env_for('http://example.com?token=sometoken', {}) }
      let(:security_gateway) { instance_double('Infrastructure::SecurityGateway') }
      let(:security_policy) { SecurityPolicy.new(security_gateway) }

      before do
        allow(security_gateway).to receive(:valid_token?).with('valid_token').and_return(true)
      end

      context 'with no token or session' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com', {}) }

        it 'returns false' do
          request = Rack::Request.new(environment)
          expect(security_policy.valid?(request)).to eq false
        end
      end

      context 'with an empty token' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com?token=', {}) }

        it 'returns false' do
          request = Rack::Request.new(environment)
          expect(security_policy.valid?(request)).to eq false
        end
      end

      context 'with just a session' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com') }

        context 'with a valid session' do
          it 'returns true' do
            allow(security_gateway).to receive(:valid_token?)
              .with('valid_token').and_return(true)
            request = Rack::Request.new(environment)
            request.session['token'] = 'valid_token'
            expect(security_policy.valid?(request)).to eq true
          end
        end

        context 'with an invalid session' do
          it 'returns true' do
            allow(security_gateway).to receive(:valid_token?)
              .with('invalid_token').and_return(false)
            request = Rack::Request.new(environment)
            request.session['token'] = 'invalid_token'
            expect(security_policy.valid?(request)).to eq false
          end
        end
      end

      context 'with just a token' do
        let(:environment) { Rack::MockRequest.env_for('http://example.com?token=some_token') }

        context 'with a valid token' do
          it 'returns true' do
            allow(security_gateway).to receive(:valid_token?)
              .with('some_token').and_return(true)
            request = Rack::Request.new(environment)
            expect(security_policy.valid?(request)).to eq true
          end
        end

        context 'with an invalid token' do
          it 'returns true' do
            allow(security_gateway).to receive(:valid_token?)
              .with('some_token').and_return(false)
            request = Rack::Request.new(environment)
            expect(security_policy.valid?(request)).to eq false
          end
        end
      end
    end
  end
end
