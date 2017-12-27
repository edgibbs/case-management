Rails.application.routes.draw do
  root 'dashboard#index'

  get 'clients/index'
  get 'family_finding/index'

  namespace :api do
    resources :cases, only: [ :index ] do
      collection do
        get ':user_id/index', to: 'cases#cases_by_user'
      end
    end
  end
end
