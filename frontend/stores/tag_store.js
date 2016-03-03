var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var TagConstants = require('../constants/tag_constants');

_tags = [];

var TagStore = new Store(AppDispatcher);

TagStore.allTags = function(){
	return _tags.slice();
};

TagStore.__onDispatch = function(payload){
	switch (payload.actionType){
		case TagConstants.RECEIVE_ALL_TAGS:
			resetTags(payload.tags);
			TagStore.__emitChange();
			break;
	}
};

TagStore.findSubSet = function(query){
	var results = [];
	for (var i = 0; i < _tags.length; i++) {
		var ind = _tags[i].title.indexOf(query)

		if (ind > -1){
			_tags[i]['ind'] = ind
			results.push(_tags[i])
		}
	}
	
	//sort in ascending order the ind value
	return results;
};

function resetTags(tags){
	_tags = tags
};



module.exports = TagStore;