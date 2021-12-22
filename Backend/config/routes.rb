Rails.application.routes.draw do
  resources :costs
  resources :users

  post 'login', to: 'users#login'
  get 'list-costs', to: 'costs#listCosts'
end
