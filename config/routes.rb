Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :fish do
        resources :rounds do
          resources :days do
          end
        end
      end
    end 
  end
end
