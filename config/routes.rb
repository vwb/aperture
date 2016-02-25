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
#   api_users POST   /api/users(.:format)      api/users#create {:format=>:json}
# api_session POST   /api/session(.:format)    api/sessions#create {:format=>:json}
#             GET    /api/session(.:format)    api/sessions#show {:format=>:json}
#             DELETE /api/session(.:format)    api/sessions#destroy {:format=>:json}
#

Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end  
end
