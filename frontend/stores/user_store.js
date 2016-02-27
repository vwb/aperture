var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

_user = {}

var UserStore = new Store(AppDispatcher);

UserStore.user = function(){
	return _user;
};

UserStore.__onDispatch = function(payload){
	switch (payload.actionType){
		case UserConstants.RECEIVE_USER:
			setUser(payload.user);
			UserStore.__emitChange();
			break;
	}
}

function setUser(user){
	_user = user;
}

module.exports = UserStore;