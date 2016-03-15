var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var PhotoConstants = require('../constants/photo_constants');

_photos = [];
_photo = {};

var PhotoStore = new Store(AppDispatcher);

PhotoStore.all = function(){
	return _photos.slice();
};

PhotoStore.__onDispatch = function(payload){
	
	switch (payload.actionType){
		case PhotoConstants.RECEIVE_ALL_PHOTOS:
			resetPhotos(payload.photos);
			PhotoStore.__emitChange();
			break;
		case PhotoConstants.RECEIVE_PHOTO:
			setPhoto(payload.photo);
			PhotoStore.__emitChange();
			break;
		case PhotoConstants.UPDATE_PHOTO:
			updatePhoto(payload.photo);
			PhotoStore.__emitChange();
			break;
		case PhotoConstants.REMOVE_PHOTO:
			removePhoto(payload.photo);
			PhotoStore.__emitChange();
			break;
	}
};

PhotoStore.find_by_id = function(id){
	for (var i = 0; i < _photos.length; i++) {
		if (_photos[i].id === id){
			return _photos[i];
		}
	}
};

PhotoStore.grabNext = function(photo){
	debugger;
	var ind = _photos.indexOf(photo);

	if ((ind+1) < _photos.length){
		return _photos[ind+1]
	} else {
		return _photos[0]
	}
};

PhotoStore.grabPrevious = function(photo){
	var ind = _photos.indexOf(photo);
	if ((ind-1) >= 0){
		return _photos[ind-1]
	} else {
		return _photos[_photos.length-1]
	}
};

function resetPhotos(photos){
	_photos = photos;
};

function setPhoto(photo){
	_photo = photo;
};

function updatePhoto(photo){
	for (var i = 0; i < _photos.length; i++) {
		if (_photos[i].id === photo.id){
			_photos[i] = photo;
			break;
		};
	};

	_photo = photo
};

function removePhoto(photo){
	var ind = _photos.indexOf(photo);
	if (ind > -1){
		_photos.splice(ind, 1);
	}
};

module.exports = PhotoStore;

