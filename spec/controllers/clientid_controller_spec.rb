# frozen_string_literal: true

require 'rails_helper'

describe ClientidController do
  describe '#index' do
    it 'has route' do
      expect(get: 'clientid/index').to route_to(
        controller: 'clientid',
        action: 'index'
      )
    end
  end
end
