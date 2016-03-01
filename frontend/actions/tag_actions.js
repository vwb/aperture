var AppDispatcher = require('../dispatcher');
var TagConstants = require('../constants/tag_constants');
var ApiUtil = require('../util/api_util');

var TagActions = {
	fetchAllTags: function(){
		ApiUtil.fetchAllTags(this.receiveAllTags);
	},

	receiveAllTags: function(tags){
		AppDispatcher.dispatch({
			actionType: TagConstants.RECEIVE_ALL_TAGS,
			tags: tags
		});
	}
}

module.exports = TagActions;