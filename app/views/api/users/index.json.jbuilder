json.array! @users do |user|
	json.id user.id
	json.email user.email
	json.avatar user.avatar
	json.username user.username

	json.photos user.photos do |photo|
		json.id photo.id
		json.url photo.url
	end

	json.collections user.collections do |collection|
		json.title collection.title
		json.id collection.id
		json.photos collection.photos
	end
end
