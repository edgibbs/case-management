# frozen_string_literal: true

require 'rails_helper'

module Api
  describe ClientsController do
    describe '#client_by_id' do
      let(:client_repository) { instance_double('Client::ClientRepository') }

      it 'has a route' do
        expect(get: 'api/clients/client_id').to route_to(
          format: 'json',
          controller: 'api/clients',
          action: 'show',
          id: 'client_id'
        )
      end
    end
  end
end
