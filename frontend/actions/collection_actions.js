var AppDispatcher = require('../dispatcher');
var ApiUtil = require('../../util/api_util');

var CollectionActions = {

	addPhoto: function(collectionId, photoId){
		var params = {
			photo_id: photoId
		}
		ApiUtil.addPhotoToCollection(id, params, this.receivePhoto)
	},

	receivePhoto: function(collection){
		AppDispatcher.dispatch({
			
		})
	}
};

module.exports = CollectionActions;