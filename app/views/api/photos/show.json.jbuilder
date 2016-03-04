json.extract! @photo, :id, :url, :title, :price, :user_id, :tags

json.comments @photo.comments do |comment|
	json.content comment.content
	json.user comment.user
end