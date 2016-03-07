class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      user_params[:email],
      user_params[:password])

    if @user
      login_user!(@user)
      render :show
    else
      @errors = ["Incorrect login information"]
      render :errors
    end
    
  end

  def show
    @user = current_user
    render :show
  end

  def destroy
    @user = current_user

    logout_user!
    render :show

  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
