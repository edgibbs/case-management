# frozen_string_literal: true

require 'rails_helper'

describe ClientsController do
  describe '#show' do
    it 'has route' do
      expect(get: 'clients/show').to route_to(
        controller: 'clients',
        action: 'show'
      )
    end

    it 'renders show template' do
      get :show
      expect(response).to render_template 'show'
    end
  end
end
