Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :fish do
        resources :days do
          resources :rounds do
          end
        end
      end
    end 
  end
end
