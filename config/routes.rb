Rails.application.routes.draw do
  root 'home#index'
  get 'clients/show'
  get 'family_finding/index'
end
