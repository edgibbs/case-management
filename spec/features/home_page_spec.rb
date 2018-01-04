# frozen_string_literal: true

require 'rails_helper'
require 'feature/testing'

feature 'index page' do
  scenario 'displays cm landing page' do
    Feature.run_with_deactivated(:authentiation) do
      visit '/?token=example'
      expect(page.title).to eq 'CaseManagement'
    end
  end
end
