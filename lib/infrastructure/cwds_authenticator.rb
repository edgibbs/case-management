# frozen_string_literal: true

module Infrastructure
  class CwdsAuthenticator
    def initialize(application)
      @application = application
    end

    def call(environment)
      return @application.call(environment) unless Feature.active?(:authentication)
      request = Rack::Request.new(environment)
      return redirect_to_login(request.url) unless SecurityPolicy.new.valid?(request)
      request.session['token'] = request.params['token'] unless request.params['token'].blank?
      @application.call(environment)
    end

    private

    def redirect_to_login(url)
      [301, { 'Location' => login_url(url) }, []]
    end

    def login_url(callback)
      "#{Rails.configuration.micro_services['perry_api_base_url']}/authn/login?callback=#{callback}"
    end
  end
end
