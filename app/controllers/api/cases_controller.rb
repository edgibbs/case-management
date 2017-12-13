# frozen_string_literal: true

module Api
  class CasesController < ActionController::API
    def cases_by_user
      cases = names.map.with_index do |name, index|
        create_case(index + 1, name)
      end
      render json: cases
    end

    private

    def names
      %w[Alice Bob Carl Dave Earl Frank Gregg Henry Ivan Johnny]
    end

    def create_case(id, name)
      { id: id.to_s, name: name, assignmentType: 'primary',
        assignmentDate: '2017-12-25', serviceComponent: 'Family Maintenance' }
    end
  end
end
