var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

_user = {}
_users = {}
var UserStore = new Store(AppDispatcher);

UserStore.user = function(){
	var copy = Object.assign({}, _user)
	return copy
};

UserStore.findUserById = function(id){
	return _users[id]
};

UserStore.all = function(){
	return _users
};

UserStore.__onDispatch = function(payload){
	switch (payload.actionType){
		case UserConstants.RECEIVE_USER:
			setUser(payload.user);
			UserStore.__emitChange();
			break;
		case UserConstants.RECEIVE_ALL_USERS:
			setAllUsers(payload.users);
			UserStore.__emitChange();
			break;
	}
};

function setUser(user){
	_user = user;
};

function setAllUsers(users){
	for (var i = 0; i < users.length; i++) {
		_users[users[i].id] = users[i]
	}
};

module.exports = UserStore;