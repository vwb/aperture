var AppDispatcher = require('../dispatcher');
var SessionActions = require('../actions/session_actions');

var SessionsUtil = {

	createUser: function(params, callback){
		$.ajax({
			type: "POST",
			url: "/api/users",
			data: {user: params},
			datatype: "json",
			success: function(data){
				SessionActions.newUser(data);
				callback(data.id);
			}
		});
	},

	createSession: function(params, callback){

		$.ajax({
			type: "POST",
			url: "/api/session",
			data: {user: params},
			datatype: "json",
			success: function(data){
				SessionActions.newSession(data);
				callback();
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