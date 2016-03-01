var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var TagConstants = require('../constants/tag_constants');

_tags = {};

var TagStore = new Store(AppDispatcher);

TagStore.allTags = function(){
	return Object.keys(_tags)
};

TagStore.__onDispatch = function(payload){
	switch (payload.actionType){
		case TagConstants.RECEIVE_ALL_TAGS:
			resetTags(payload.tags);
			TagStore.__emitChange();
			break;
	}
};

function resetTags(tags){
	for (var i = 0; i < tags.length; i++) {
		_tags[tags[i].title] = tags[i]
	}
};

module.exports = TagStore;