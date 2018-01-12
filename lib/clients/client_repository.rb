# frozen_string_literal: true

module Clients
  class ClientRepository
    def initialize(http_service = Infrastructure::HttpService.new)
      @http_service = http_service
    end

    def show(id)
      response = @http_service.get("/clients/#{id}")
      Client.new(response.body)
    end
  end
end
