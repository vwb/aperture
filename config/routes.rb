# == Route Map
#
#          Prefix Verb   URI Pattern                              Controller#Action
#            root GET    /                                        static_pages#root
#      api_photos GET    /api/photos(.:format)                    api/photos#index {:format=>:json}
#                 POST   /api/photos(.:format)                    api/photos#create {:format=>:json}
#       api_photo GET    /api/photos/:id(.:format)                api/photos#show {:format=>:json}
#                 PATCH  /api/photos/:id(.:format)                api/photos#update {:format=>:json}
#                 PUT    /api/photos/:id(.:format)                api/photos#update {:format=>:json}
#                 DELETE /api/photos/:id(.:format)                api/photos#destroy {:format=>:json}
#       api_users POST   /api/users(.:format)                     api/users#create {:format=>:json}
#        api_user GET    /api/users/:id(.:format)                 api/users#show {:format=>:json}
#     api_session POST   /api/session(.:format)                   api/sessions#create {:format=>:json}
#                 GET    /api/session(.:format)                   api/sessions#show {:format=>:json}
#                 DELETE /api/session(.:format)                   api/sessions#destroy {:format=>:json}
# api_collections POST   /api/collections(.:format)               api/collections#create {:format=>:json}
#  api_collection GET    /api/collections/:id(.:format)           api/collections#show {:format=>:json}
#                 DELETE /api/collections/:id(.:format)           api/collections#destroy {:format=>:json}
#             api GET    /api/collections/:id/add_photo(.:format) api/api/collections#add_photo {:format=>:json}
#

Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :collections, only: [:show, :create, :destroy]
    get 'collections/:id/add_photo', to: 'collections#add_photo'
  end  
end
