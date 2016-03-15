var AppDispatcher = require('../dispatcher');
var ApiUtil = require('../util/api_util');
var CollectionConstants = require('../constants/collection_constants');
var PhotoActions = require('../actions/photo_actions');

var CollectionActions = {

	addPhoto: function(collectionId, photoId){
		var params = {
			photo_id: photoId
		}
		ApiUtil.addPhotoToCollection(collectionId, params, this.receiveCollections);
	},

	removePhoto: function(collectionId, photoId){
		var params = {
			photo_id: photoId
		}
		ApiUtil.removePhotoFromCollection(collectionId, params, this.receiveCollections);
	},

	fetchUserCollections: function(userID){
		var params = {
			user_id: userID
		};
		ApiUtil.fetchUserCollections(params, this.receiveCollections);
	},

	fetchCollection: function(collectionID){
		ApiUtil.fetchCollection(collectionID, this.receiveCollection);
	},
	
	receiveCollections: function(collections){
		AppDispatcher.dispatch({
			actionType: CollectionConstants.RECEIVE_COLLECTIONS,
			collections: collections
		})
	},

	receiveCollection: function(collection){
		AppDispatcher.dispatch({
			actionType: CollectionConstants.RECEIVE_COLLECTIONS,
			collections: collection
		})
	},

	createCollection: function(params, successRedirect, errorCallback){
		ApiUtil.createCollection(params, this.receiveCollections, successRedirect, errorCallback);
	},



};

module.exports = CollectionActions;