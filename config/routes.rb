Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#homepage', constraints: ->(request){ request.format.html? }
  resources :listings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#homepage"
end
