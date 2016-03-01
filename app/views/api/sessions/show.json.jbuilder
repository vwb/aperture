
unless @user.nil?
	json.extract! @user, :id, :email, :session_token
end