# frozen_string_literal: true

module Case
  class CaseRepository
    def initialize(http_service = Infrastructure::HttpService.new)
      @http_service = http_service
    end

    def cases_by_user_id(user_id)
      raw_json = @http_service.get("/cases/_search=user=#{user_id}")
      JSON.parse(raw_json, symbolize_names: true)[:results].map { |result| Case.new(result) }
    end
  end
end
