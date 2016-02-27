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

	createPhoto: function(params, options){
		$.ajax({
			type: "POST",
			url: "/api/photos",
			datatype: "json",
			data: {photo: params},
			success: function(photo){
				PhotoActions.receivePhoto(photo);
				options.callBack();	
			}
		});
	},

	updatePhoto: function(id, params){
		$.ajax({
			type: "PATCH",
			url: "/api/photos/"+id,
			datatype: "json",
			data: {photo: params},
			success: function(photo){
				PhotoActions.updatePhoto(photo);
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

	addPhotoToCollection: function(id, params, callback){
		$.ajax({
			url: "/api/collections/"+id+"/add_photo",
			datatype: "json",
			data: params,
			success: function(data){
				callback(data)
			}

		});
	}


};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;