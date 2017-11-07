Rails.application.routes.draw do
  namespace :portal do
    resources :shops, only: [:index, :show, :update, :destroy]
  end
end
