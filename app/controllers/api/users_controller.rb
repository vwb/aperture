# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      collection = Collection.create!(title: "Favorites", user_id: @user.id)
      login_user!(@user)
      render :create
    else
      @errors = @user.errors.full_messages
      render :errors
    end

      
  end

  def show
    @user = User.includes(:photos, collections: :photos, photos: :user).find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      @user.avatar = params[:user][:avatar]
      render :show
    else 
      @errors = @user.errors.full_messages
      render :errors
    end

  end

  def index
    @users = User.includes(:photos, collections: :photos).all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username, :avatar)
  end

end
