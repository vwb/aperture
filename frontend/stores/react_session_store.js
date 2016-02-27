var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');
var SessionUtil = require('../util/sessions_util');

_session = {};
_current_user = undefined;

var SessionStore = new Store(AppDispatcher);

SessionStore.__onDispatch = function(payload){

	switch (payload.actionType){

		case SessionConstants.NEW_USER:
			makeNewSession(payload.user);
			SessionStore.__emitChange();
			break;

		case SessionConstants.NEW_SESSION:
			makeNewSession(payload.user);
			SessionStore.__emitChange();
			break;

		case SessionConstants.DESTROY_SESSION:
			destroySession(payload.user);
			SessionStore.__emitChange();
			break;

		case SessionConstants.RECEIVE_CURRENT:
			makeNewSession(payload.current);
			SessionStore.__emitChange();
			break;
	}
};

SessionStore.currentUser = function(){
	return _session["current"];
};

SessionStore.isLoggedIn = function(){
	if (_session["current"]){
		return true
	} else {
		return false
	}
};

function makeNewSession(user){
	if (Object.keys(user).length){
		_session["current"] = user;
	}
};

function destroySession(user){
	_current_user = undefined;
	delete _session["current"];
};

module.exports = SessionStore;



