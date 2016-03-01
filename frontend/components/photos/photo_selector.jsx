var React = require('react');
var Masonry = require('react-masonry-component');
var PhotoThumb = require('../photos/photo_thumb');
var PhotoStore = require('../../stores/photo_store');

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".grid-item"
};

var PhotoSelector = React.createClass({


	getInitialState: function(){
		return {
			photos: PhotoStore.all(),
			selectedPhotos: []
		}
	},

	generateThumbnails: function(){

		return this.state.photos.map(function(photo, ind){
			var cName = "grid-item w3";

			if (this.state.selectedPhotos.indexOf(photo.id) > -1){
				cName += " selected"
			}

			return <PhotoThumb
								photo={photo}
								key={ind}
								ind={photo.id}
								updateForm={this.handleSelection}
								cName={cName}/>
		}.bind(this))
	},

	componentDidMount: function(){
		this.toke = PhotoStore.addListener(this._onChange);
		ApiUtil.fetchAllPhotos();
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	_onChange: function(){
		this.setState({photos: PhotoStore.all()})
	},

	handleSelection: function(url, id){

		var ind = this.state.selectedPhotos.indexOf(id);
		var newPhotos = this.state.selectedPhotos;

		if (ind > -1){

			newPhotos.splice(ind, 1);
			this.setState({selectedPhotos: newPhotos})

		} else {

			newPhotos = this.state.selectedPhotos.concat(id);
			this.setState({selectedPhotos: newPhotos})

		}

		this.props.updateForm(newPhotos);
	},

	render: function() {
		return (
			<div>
				<Masonry
					className={"grid group"}
					elementType={"div"}
					options={masonryOptions}
					disableImagesLoaded={false}>

					{this.generateThumbnails()}

				</Masonry>
			</div>
		);
	}
});

module.exports = PhotoSelector;