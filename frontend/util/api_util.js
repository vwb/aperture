var AppDispatcher = require('../dispatcher');
var PhotoActions = require('../actions/photo_actions');
var UserActions = require('../actions/user_actions');


var ApiUtil = {

	fetchAllPhotos: function(){
		$.ajax({
			url: "/api/photos",
			datatype: "json",
			success: function(photos){
				PhotoActions.receivePhotos(photos);
			}
		});
	},

	fetchPhoto: function(id){
		$.ajax({
			url: "/api/photos/"+id,
			datatype: "json",
			success: function(photo){
				PhotoActions.receivePhoto(photo)
			}
		})
	},	

	fetchRelevantPhotos: function(query){
		$.ajax({
			url: "/api/photos",
			datatype: "json",
			data: query,
			success: function(photos){
				PhotoActions.receivePhotos(photos);
			}
		})
	},

	createPhoto: function(params, values){

		var testData = {photo: params}

		$.ajax({
			type: "POST",
			url: "/api/photos",
			datatype: "json",
			data: testData,
			success: function(photo){
				PhotoActions.receivePhoto(photo);
				values.callBack();	
			}
		});
	},

	updatePhoto: function(id, params, callback){
		$.ajax({
			type: "PATCH",
			url: "/api/photos/"+id,
			datatype: "json",
			data: {photo: params},
			success: function(photo){
				PhotoActions.updatePhoto(photo);
				callback();
			}
		});
	},

	deletePhoto: function(id){
		$.ajax({
			type: "DELETE",
			url: "/api/photos/"+id,
			datatype: "json",
			success: function(photo){
				PhotoActions.removePhoto(photo);
			}
		});
	},

	fetchUser: function(id){
		$.ajax({
			url: "/api/users/"+id,
			datatype: "json",
			success: function(user){
				UserActions.receiveUser(user);
			}
		});
	},

	updateUser: function(id, params, successCallBack, errorCallBack){

		$.ajax({
			type: "PATCH",
			url: "api/users/"+id,
			data: {user: params},
			datatype: "json",
			success: function(data){
				if (data.error){
					errorCallBack(data)
				} else {
					successCallBack()
					UserActions.receiveUser(data);
				}
			}
		})
	},

	addPhotoToCollection: function(id, params, callback){
		$.ajax({
			url: "/api/collections/"+id+"/add_photo",
			datatype: "json",
			data: params,
			success: function(data){
				callback(data)
			}
		});
	},

	removePhotoFromCollection: function(id, params, callback){
		$.ajax({
			url: "/api/collections/"+id+"/remove_photo",
			datatype: "json",
			data: params, 
			success: function(data){
				callback(data)
			}
		});
	},

	fetchCollection: function(id, callback){
		$.ajax({
			url: "/api/collections/"+id,
			datatype: "json",
			success: function(data){
				callback(data)
			}
		})
	},

	fetchUserCollections: function(params, callback){
		$.ajax({
			url: "/api/collections",
			data: params,
			datatype: "json",
			success: function(collections){
				callback(collections)
			}
		});
	},

	createCollection: function(params, callback, successRedirect){
		$.ajax({
			url: "/api/collections",
			data: {collection: params},
			type: "POST",
			datatype: "json",
			success: function(collections){
				callback(collections)
				successRedirect(collections.id)
			}
		});
	},

	createComment: function(params){
		$.ajax({
			url: "/api/comments",
			data: {comment: params},
			type: "POST",
			datatype: "json",
			success: function(photo){
				PhotoActions.updatePhoto(photo);
			}
		})
	},

	fetchAllTags: function(callback){
		$.ajax({
			url: "/api/tags",
			datatype: "json",
			success: function(tags){
				callback(tags);
			}
		})
	}


};
module.exports = ApiUtil;