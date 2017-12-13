# frozen_string_literal: true

require 'rails_helper'

module Api
  describe CasesController do
    describe '#cases_by_user' do
      let(:case_repository) { instance_double('Case::CaseRepository') }

      it 'has a route' do
        expect(get: 'api/cases/42/index').to route_to(
          controller: 'api/cases',
          action: 'cases_by_user',
          user_id: '42'
        )
      end

      it 'returns json' do
        get :cases_by_user, params: { user_id: 42 }
        json = JSON.parse(response.body, symbolize_names: true)
        expect(json.first).to eq(id: '1',
                                 name: 'Alice',
                                 assignmentType: 'primary',
                                 assignmentDate: '2017-12-25',
                                 serviceComponent: 'Family Maintenance')
      end
    end
  end
end
