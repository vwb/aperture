var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var TagConstants = require('../constants/tag_constants');

_tags = [];

var TagStore = new Store(AppDispatcher);

TagStore.allTags = function(){
	return _tags.slice();
};

TagStore.allTagTitles = function(){
	var titles = _tags.map(function(tag){
		return tag.title
	});

	return titles;
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

	var titles = TagStore.allTagTitles()

	for (var i = 0; i < titles.length; i++) {
		var ind = titles[i].indexOf(query)
		if (ind > -1){
			results.push(titles[i]);
		}
	}

	return results;
};

function resetTags(tags){
	_tags = tags
};



module.exports = TagStore;