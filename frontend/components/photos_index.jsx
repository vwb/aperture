var React = require('react');
var PhotoStore = require('../stores/photo_store');
var ApiUtil = require('../util/api_util');
var PhotoIndexItem = require('./photos_index_item');
var PhotoForm = require('./photos_form');

var PhotoIndex = React.createClass({
	getInitialState: function(){
		return {
			photos: PhotoStore.all()
		};
	},

	componentDidMount: function(){
		this.toke = PhotoStore.addListener(this._onChange);
		ApiUtil.fetchAllPhotos();
	},

	_onChange: function(){
		this.setState({photos: PhotoStore.all()})
	},

	generatePhotoItems: function(){
		return this.state.photos.map(function(photo, key){
			return <PhotoIndexItem key={key} photo={photo} />
		});
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	render: function() {
		return (
			<div className="PhotoIndex">
				<PhotoForm/>
				{this.generatePhotoItems()}
			</div>
		);
	}
});

module.exports = PhotoIndex;