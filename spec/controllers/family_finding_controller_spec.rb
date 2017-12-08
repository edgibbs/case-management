require 'rails_helper'

describe FamilyFindingController do
  describe 'index' do
    it 'has route' do
      expect(get: 'family_finding/index').to route_to(
        controller: 'family_finding',
        action: 'index'
      )
    end

    it 'renders a template' do
      get :index
      expect(response).to render_template 'index'
    end
  end
end
