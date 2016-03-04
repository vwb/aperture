
unless @user.nil?
	json.extract! @user, :id, :email, :session_token, :avatar, :username
end