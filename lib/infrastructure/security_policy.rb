# frozen_string_literal: true

module Infrastructure
  class SecurityPolicy
    def initialize(security_gateway = SecurityGateway.new)
      @security_gateway = security_gateway
    end

    def valid?(request)
      token = request.params['token'] || request.session['token']
      if token.blank?
        false
      elsif token_is_valid?(token)
        true
      else
        false
      end
    end

    private

    def token_is_valid?(token)
      @security_gateway.valid_token?(token)
    end
  end
end
