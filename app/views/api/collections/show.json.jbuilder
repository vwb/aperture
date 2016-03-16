json.id @collections.id
json.user_id @collections.user_id
json.title @collections.title
json.cover_photo @collections.cover_photo
json.user_name @collections.user.username

json.photos @collections.photos do |photo|
	json.id photo.id
	json.url photo.url
	json.title photo.title

	json.comments photo.comments do |comment|
		json.content comment.content
		json.user comment.user
	end

	json.tags photo.tags
	json.description photo.description
	json.user photo.user
end



