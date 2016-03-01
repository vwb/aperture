var AppDispatcher = require('../dispatcher');
var ApiUtil = require('../util/api_util');

var CommentActions = {
	createComment: function(params){
		ApiUtil.createComment(params);
	}
};

module.exports = CommentActions;