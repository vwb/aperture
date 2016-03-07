var AppDispatcher = require('../dispatcher');
var TagConstants = require('../constants/tag_constants');
var ApiUtil = require('../util/api_util');

var TagActions = {
	fetchAllTags: function(callback){
		if (callback){
			ApiUtil.fetchAllTags(this.receiveAllTags, callback)
		} else {
			ApiUtil.fetchAllTags(this.receiveAllTags);
		}
	},

	receiveAllTags: function(tags){
		AppDispatcher.dispatch({
			actionType: TagConstants.RECEIVE_ALL_TAGS,
			tags: tags
		});
	}
}

module.exports = TagActions;