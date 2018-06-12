class Api::FishController < ApplicationController
    def index 
        @fish = User.find(params[:user_id]).fish
        render json: @fish
    end

    def show
        @fish = Fish.find(params[:id])
        render json: @fish
    end

    def create 
        @fish = User.find(params[:user_id]).fish
        @fish.create!(fish_params)
        render json: @fish
    end

    private
    def fish_params
        params.require(:fish).permit(:name)
    end

end
