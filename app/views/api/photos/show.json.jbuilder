json.extract! @photo, :id, :url, :title, :user, :tags, :description

json.comments @photo.comments do |comment|
	json.content comment.content
	json.user comment.user
end