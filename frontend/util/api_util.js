var AppDispatcher = require('../dispatcher');
var PhotoActions = require('../actions/photo_actions');


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

	createPhoto: function(params){
		$.ajax({
			type: "POST",
			url: "/api/photos",
			datatype: "json",
			data: {photo: params},
			success: function(photo){
				PhotoActions.receivePhoto(photo);
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
	}


};


window.ApiUtil = ApiUtil;
module.exports = ApiUtil;