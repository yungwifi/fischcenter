class Api::RoundsController < ApplicationController
    def index 
        @round = Fish.find(params[:fish_id]).round
        render json: @round
    end
end
