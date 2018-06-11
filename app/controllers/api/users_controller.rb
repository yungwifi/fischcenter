class Api::UsersController < ApplicationController
    def index 
        @user = User.all

        render json: @user
    end

    def show
        @user = User.find(params[:id])

        render json: @user
    end

    def create 
        @user = User.create!(user_params)

        render json: @user
    end


    def update 
        @user = User.find(params[:id])
        @user.update!(user_params)

        render json: @user
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render status: 200
    end

    private
    def user_params
        params.require(:user).permit( :first_name, :last_name)
      end
end
