class Api::RoundsController < ApplicationController
    def index 
        @round = Fish.find(params[:fish_id]).round
        render json: @round
    end

    def show 
        @round = Round.find(params[:id])
        render json: @round
    end

    def update 
        @round = Round.find(params[:id])
        @round.update!(round_params)
        render json: @round
    end

    private
    def round_params
        params.require(:round).permit(:round_one, :round_two, :round_three, :bonus_round)
    end
end
