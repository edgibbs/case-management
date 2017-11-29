# frozen_string_literal: true

require 'rails_helper'

feature 'index page' do
  scenario 'displays cm landing page' do
    visit '/'
    expect(page.title).to eq 'CaseManagement'
  end
end
