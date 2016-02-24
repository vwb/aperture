# == Route Map
#
#      Prefix Verb   URI Pattern               Controller#Action
#        root GET    /                         static_pages#root
#  api_photos GET    /api/photos(.:format)     api/photos#index {:format=>:json}
#             POST   /api/photos(.:format)     api/photos#create {:format=>:json}
#   api_photo GET    /api/photos/:id(.:format) api/photos#show {:format=>:json}
#             PATCH  /api/photos/:id(.:format) api/photos#update {:format=>:json}
#             PUT    /api/photos/:id(.:format) api/photos#update {:format=>:json}
#             DELETE /api/photos/:id(.:format) api/photos#destroy {:format=>:json}
#       users POST   /users(.:format)          users#create
#    new_user GET    /users/new(.:format)      users#new
#     session POST   /session(.:format)        sessions#create
# new_session GET    /session/new(.:format)    sessions#new
#             DELETE /session(.:format)        sessions#destroy
#

Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  
end
