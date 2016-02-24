var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var PhotoConstants = require('../constants/photo_constants');

_photos = [];

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
			addPhoto(payload.photo);
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

function resetPhotos(photos){
	_photos = photos;
};

function addPhoto(photo){
	_photos.push(photo);
};

function updatePhoto(photo){
	for (var i = 0; i < _photos.length; i++) {
		if (_photos[i].id === photo.id){
			_photos[i] = photo;
			break;
		};
	};
};

function removePhoto(photo){
	var ind = _photos.indexOf(photo);
	if (ind > -1){
		_photos.splice(ind, 1);
	}
};

module.exports = PhotoStore;

