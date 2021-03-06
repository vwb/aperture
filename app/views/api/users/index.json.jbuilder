json.array! @users do |user|
	json.id user.id
	json.email user.email
	json.avatar user.avatar
	json.username user.username

	json.photos user.photos do |photo|
		json.id photo.id
		json.url photo.url
		json.title photo.title
		json.user photo.user
	end

	json.collections user.collections do |collection|
		json.title collection.title
		json.id collection.id
		json.photos collection.photos
		json.cover_photo collection.cover_photo
	end
end
