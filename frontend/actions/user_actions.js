var AppDispatcher = require('../dispatcher');
var UserConstants = require('../constants/user_constants');
var ApiUtil = require('../util/api_util');

var UserActions = {

	receiveUser: function(user){
		AppDispatcher.dispatch({
			actionType: UserConstants.RECEIVE_USER,
			user: user
		});
	},

	fetchAllUsers: function(){
		ApiUtil.fetchAllUsers(this.receiveAllUsers);
	},

	receiveAllUsers: function(users){
		AppDispatcher.dispatch({
			actionType: UserConstants.RECEIVE_ALL_USERS,
			users: users
		});
	}


};

module.exports = UserActions;