Rails.application.routes.draw do
  resources :cwds
  resources :case_managements
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root 'case_managements#index'
end
