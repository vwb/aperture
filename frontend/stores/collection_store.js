var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var CollectionConstants = require('../constants/collection_constants');

var CollectionStore = new Store(AppDispatcher);

_collections = [];

CollectionStore.__onDispatch = function(payload){

	switch (payload.actionType){

		case CollectionConstants.RECEIVE_COLLECTIONS:
			updateCollection(payload.collections);
			CollectionStore.__emitChange();
			break;
	}
};

CollectionStore.all = function(){
	return _collections.slice();
};

CollectionStore.findById = function(id){
	for (var i = 0; i < _collections.length; i++) {
		if (_collections[i].id === id){
			return _collections[i];
		}
	}
};

CollectionStore.collection = function(){
	if (_collections.length === 1){
		return _collections[0];
	}
};

function updateCollection(collections){
	if (collections instanceof Array){
		_collections = collections;
	} else {
		_collections = [collections];
	}
	
};

module.exports = CollectionStore;