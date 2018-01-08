# frozen_string_literal: true

module Api
  class CasesController < ActionController::API
    def cases_by_user
      cases = Cases::CaseRepository.new.cases_by_user_id params[:user_id]
      render json: cases
    end
  end
end
