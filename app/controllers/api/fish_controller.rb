class Api::FishController < ApplicationController
    def index 
        @fish = User.find(params[:user_id]).fish

        render json: @fish
    end

    def show
        @fish = Fish.find(params[:id])

        render json: @fish
    end
end
