# frozen_string_literal: true

require 'rails_helper'

describe ClientsController do
  describe '#show' do
    it 'has route' do
      expect(get: 'clients/index').to route_to(
        controller: 'clients',
        action: 'index'
      )
    end

    it 'renders show template' do
      get :index
      expect(response).to render_template 'index'
    end
  end
end
