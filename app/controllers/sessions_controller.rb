class SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:email],
      user_params[:password])

    if @user
      login_user!(@user)
      redirect_to :root
    else
      flash.now[:errors] = "Incorrect information"
      render :new
    end
    
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
