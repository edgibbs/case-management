# frozen_string_literal: true

require 'rails_helper'

module Infrastructure
  describe SecurityGateway do
    let(:security_gateway) { SecurityGateway.new }

    describe '#validate_token' do
      let(:response) { instance_double('Faraday::Response') }

      context 'with a valid token' do
        it 'returns true' do
          allow(response).to receive(:status).and_return(200)
          allow(response).to receive(:body).and_return('json')
          allow(Faraday).to receive(:get)
            .with('https://perry.test.cwds.io/authn/validate?token=valid_token')
            .and_return(response)
          expect(security_gateway.validate_token('valid_token')).to eq 'json'
        end
      end

      context 'with an invalid token' do
        it 'returns false' do
          allow(response).to receive(:status).and_return(401)
          allow(Faraday).to receive(:get)
            .with('https://perry.test.cwds.io/authn/validate?token=invalid_token')
            .and_return(response)
          expect(security_gateway.validate_token('invalid_token')).to eq nil
        end
      end
    end
  end
end
