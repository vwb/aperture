json.extract! @photo, :id, :url, :title, :user_id, :tags, :description

json.comments @photo.comments do |comment|
	json.content comment.content
	json.user comment.user
end