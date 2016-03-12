var AppDispatcher = require('../dispatcher');
var ModalConstants = require('../constants/modal_constants');

var ModalActions = {
	showModal: function(modalType){
		AppDispatcher.dispatch({
			actionType: "SHOW_MODAL",
			modalType: modalType
		})
	},

	hideModal: function(){
		AppDispatcher.dispatch({
			actionType: "HIDE_MODAL"
		})
	}
};

module.exports = ModalActions;