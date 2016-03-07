var AppDispatcher = require('../dispatcher');
var SessionActions = require('../actions/session_actions');

var SessionsUtil = {

	createUser: function(params, successCallBack, errorCallBack){
		$.ajax({
			type: "POST",
			url: "/api/users",
			data: {user: params},
			datatype: "json",
			success: function(data){
				if (data.error){
					errorCallBack(data)
				} else {
					SessionActions.newUser(data);
					successCallBack(data.id);
				}
			},
		});
	},

	createSession: function(params, successCallBack, errorCallBack){

		$.ajax({
			type: "POST",
			url: "/api/session",
			data: {user: params},
			datatype: "json",
			success: function(data){
				if (data.error){
					errorCallBack(data)
				} else {
					SessionActions.newSession(data);
					successCallBack();
				}
			}.bind(this)
		});
	},

	destroySession: function(){
		$.ajax({
			type: "DELETE",
			url: "/api/session",
			datatype: "json",
			success: function(data){
				SessionActions.destroySession(data);
			}
		});
	},

	fetchCurrent: function(){
		$.ajax({
			url: "/api/session",
			datatype: "json",
			success: function(data){
				SessionActions.fetchCurrent(data);
			}
		});
	}

}

module.exports = SessionsUtil;