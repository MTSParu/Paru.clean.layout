Rails.application.routes.draw do
  resources :users
 root 'pages#home'
 get 'about', to: 'pages#about'
 resources :articles
 get 'signup', to: 'users#new'
 resources :user, except: [:new]
 get 'login', to: 'sessions#new'
 post 'login', to: 'sessions#create'
 get 'logout', to: 'sessions#destroy'
 resources :categories, except: [:destroy]
end