json.extract! @user, :id, :email, :collections, :avatar, :username, :photos

json.collections @user.collections do |collection|
	json.id collection.id
	json.photos collection.photos
	json.title collection.title
	json.cover_photo collection.cover_photo
end

json.photos @user.photos do |photo|
	json.id photo.id
	json.url photo.url
	json.set! :user do
		json.id photo.user.id
		json.avatar photo.user.avatar
		json.username photo.user.username
	end 
end
