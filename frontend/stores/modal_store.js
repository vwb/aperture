var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var ModalConstants = require('../constants/modal_constants')

var ModalStore = new Store(AppDispatcher);

_modal = {
	show: false
}

ModalStore.__onDispatch = function(payload){
	switch (payload.actionType){
		case ModalConstants.SHOW_MODAL:
			assignModal(payload.modalType)
			ModalStore.__emitChange();
			break;
		case ModalConstants.HIDE_MODAL:
			clearModal()
			ModalStore.__emitChange();
			break;
	}
};

ModalStore.modal = function(){
	var copy = Object.assign({}, _modal)
	return copy
}

function assignModal(modalType){
	_modal["action"] = modalType;
	_modal["show"] = true;
}

function clearModal(){
	_modal["action"] = undefined;
	_modal["show"] = false;
}

module.exports = ModalStore;

