class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  def current_user
    @current_user ||= User.includes(:collections).find_by(session_token: session[:token])
  end

  def login_user!(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def logout_user!
    current_user.reset_session_token!
    session[:token] = nil
  end

  def signed_in?
    !!current_user
  end

end
