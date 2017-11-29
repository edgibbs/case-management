Rails.application.routes.draw do
  root 'home#index'
  get 'clients/show'
end
