# == Route Map
#
#          Prefix Verb   URI Pattern                                 Controller#Action
#            root GET    /                                           static_pages#root
#      api_photos GET    /api/photos(.:format)                       api/photos#index {:format=>:json}
#                 POST   /api/photos(.:format)                       api/photos#create {:format=>:json}
#       api_photo GET    /api/photos/:id(.:format)                   api/photos#show {:format=>:json}
#                 PATCH  /api/photos/:id(.:format)                   api/photos#update {:format=>:json}
#                 PUT    /api/photos/:id(.:format)                   api/photos#update {:format=>:json}
#                 DELETE /api/photos/:id(.:format)                   api/photos#destroy {:format=>:json}
#       api_users POST   /api/users(.:format)                        api/users#create {:format=>:json}
#        api_user GET    /api/users/:id(.:format)                    api/users#show {:format=>:json}
#     api_session POST   /api/session(.:format)                      api/sessions#create {:format=>:json}
#                 GET    /api/session(.:format)                      api/sessions#show {:format=>:json}
#                 DELETE /api/session(.:format)                      api/sessions#destroy {:format=>:json}
# api_collections GET    /api/collections(.:format)                  api/collections#index {:format=>:json}
#                 POST   /api/collections(.:format)                  api/collections#create {:format=>:json}
#  api_collection GET    /api/collections/:id(.:format)              api/collections#show {:format=>:json}
#                 DELETE /api/collections/:id(.:format)              api/collections#destroy {:format=>:json}
#    api_comments POST   /api/comments(.:format)                     api/comments#create {:format=>:json}
#     api_comment DELETE /api/comments/:id(.:format)                 api/comments#destroy {:format=>:json}
#             api GET    /api/collections/:id/add_photo(.:format)    api/collections#add_photo {:format=>:json}
#                 GET    /api/collections/:id/remove_photo(.:format) api/collections#remove_photo {:format=>:json}
#

Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :collections, only: [:show, :create, :destroy, :index]
    resources :comments, only: [:create, :destroy]
    resources :tags, only: [:index, :create, :destroy]

    get 'collections/:id/add_photo', to: 'collections#add_photo'
    get 'collections/:id/remove_photo', to: 'collections#remove_photo'
  end  
end
