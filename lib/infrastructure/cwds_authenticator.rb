# frozen_string_literal: true

module Infrastructure
  class CwdsAuthenticator
    def initialize(application)
      @application = application
    end

    def call(environment)
      return @application.call(environment) unless Feature.active?(:authentication)
      request = Rack::Request.new(environment)
      return redirect_to_login(request.url) if no_token_or_session(request)
      if request.params['token']
        response = SecurityGateway.new.validate_token(request.params['token'])
        return redirect_to_login(request.url) unless response
        request.session['token'] = request.params['token']
      end
      @application.call(environment)
    end

    private

    def redirect_to_login(url)
      [301, { 'Location' => login_url(url) }, []]
    end

    def login_url(callback)
      "#{Rails.configuration.micro_services['perry_api_base_url']}/authn/login?callback=#{callback}"
    end

    def no_token_or_session(request)
      request.session['token'].blank? && request.params['token'].blank?
    end
  end
end
