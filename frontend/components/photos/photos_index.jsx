var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ApiUtil = require('../../util/api_util');
var PhotoIndexItem = require('./photos_index_item');
var Masonry = require('react-masonry-component');

var masonryOptions = {
	transitionDuration: 1000,
	itemSelector: ".grid-item"
};

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

			var	cName = "grid-item";
			return <PhotoIndexItem key={key} photo={photo} className="photo-index-item" cName={cName}/>
		});
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	render: function() {

		return (
			<div className="wrapper group photo-index">
				<section>
					<Masonry
						className={'grid'}
						elementType={'div'}
						options={masonryOptions}
						disableImagesLoaded={false} >

						{this.generatePhotoItems()}

					</Masonry>
				</section>
			{this.props.children}
			</div>
		);
	}
});

module.exports = PhotoIndex;