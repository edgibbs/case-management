# frozen_string_literal: true

module Cases
  class CaseRepository
    def initialize(http_service = Infrastructure::HttpService.new)
      @http_service = http_service
    end

    def cases_by_user_id(user_id)
      response = @http_service.get("/staff/#{user_id}/cases")
      response.body.map { |result| Case.new(result) }
    end
  end
end
