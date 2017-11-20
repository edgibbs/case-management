# frozen_string_literal: true

require 'rails_helper'

feature 'index page' do
  scenario 'displays default rails' do
    visit '/'
    expect(page).to have_content('Hello')
  end
end
