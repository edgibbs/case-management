# frozen_string_literal: true

module Infrastructure
  class HttpService
    def initialize(base_url = Rails.configuration.micro_services['case_api_base_url'])
      @base_url = base_url
    end

    def get(url)
      connection = Faraday.new(url: @base_url) do |conn|
        conn.response :json, parser_options: { symbolize_names: true }
        conn.adapter Faraday.default_adapter
      end
      connection.get(url)
    end
  end
end
