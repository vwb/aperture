json.extract! @user, :id, :email, :photos, :collections, :avatar, :username

json.collections @user.collections do |collection|
	json.id collection.id
	json.photos collection.photos
	json.title collection.title
	json.cover_photo collection.cover_photo
end
