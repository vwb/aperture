var AppDispatcher = require('../dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionActions = {

	newUser: function(data){
		AppDispatcher.dispatch({
			actionType: SessionConstants.NEW_USER,
			user: data
		});
	},

	newSession: function(data){
		AppDispatcher.dispatch({
			actionType: SessionConstants.NEW_SESSION,
			user: data
		});
	},

	destroySession: function(data){
		AppDispatcher.dispatch({
			actionType: SessionConstants.DESTROY_SESSION,
			user: data
		})
	},

	fetchCurrent: function(data){
		AppDispatcher.dispatch({
			actionType: SessionConstants.RECEIVE_CURRENT,
			current: data
		})
	}

};

module.exports = SessionActions;