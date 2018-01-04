# frozen_string_literal: true

module Infrastructure
  class SecurityGateway
    def validate_token(token)
      response = Faraday.get(validation_url(token))
      response.body if response.status == 200
    end

    private

    def validation_url(token)
      "#{Rails.configuration.micro_services['perry_api_base_url']}/authn/validate?token=#{token}"
    end
  end
end
