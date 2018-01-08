# frozen_string_literal: true

require 'rails_helper'

module Api
  describe CasesController do
    describe '#cases_by_user' do
      let(:case_repository) { instance_double('Cases::CaseRepository') }

      it 'has a route' do
        expect(get: 'api/cases/42').to route_to(
          controller: 'api/cases',
          action: 'cases_by_user',
          user_id: '42',
          format: 'json'
        )
      end
    end
  end
end
