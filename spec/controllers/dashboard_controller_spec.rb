# frozen_string_literal: true

require 'rails_helper'

describe DashboardController do
  describe '#index' do
    it 'has route' do
      expect(get: '/').to route_to(controller: 'dashboard', action: 'index')
    end

    it 'renders a template' do
      get :index
      expect(response).to render_template 'index'
    end
  end
end
