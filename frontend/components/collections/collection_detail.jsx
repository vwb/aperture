var React = require('react');
var CollectionStore = require('../../stores/collection_store');
var CollectionActions = require('../../actions/collection_actions');
var Masonry = require('react-masonry-component');
var PhotoIndexItem = require('../photos/photos_index_item');

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".grid-item"
};

var CollectionDetail = React.createClass({

	getInitialState: function(){
		return {
			collection: CollectionStore.collection()
		}
	},

	componentDidMount: function(){
		this.toke = CollectionStore.addListener(this._onChange);
		CollectionActions.fetchCollection(parseInt(this.props.params.id));
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	_onChange: function(){
		this.setState({collection: CollectionStore.collection()})
	},

	generatePhotoItems: function(){
		if (this.state.collection){

			var cName = "grid-item"

			return this.state.collection.photos.map(function(photo, ind){
				return <PhotoIndexItem
									key={ind}
									photo={photo}
									cName={cName}/>
			})
		}
	},

	handleBackgroundImage: function(){
		if (this.state.collection){
			if (this.state.collection.photos.length > 0){
				return this.state.collection.photos[0].url
			} else {
				return this.state.collection.cover_photo
			}
		};
	},


	render: function() {
		var title;
		if (this.state.collection){
			title = this.state.collection.title;
		}

		return (
			<div className="parallax">

				<div className="parallax__layer parallax__layer--back background">
					<img src={this.handleBackgroundImage()}/>
				</div>

				<div className="parallax__layer parallax__layer--base group">
					<div className="collection-container">

						<section className="collection-header">
							{/*<CollectionDetailHeader collection={this.state.collection}/>*/}
							<h3> {title} </h3>
						</section>

						<section className="collection-body">

							{/*<CollectionDetailBody collection={this.state.collection}/>*/}

							<Masonry
								className={'grid'}
								elementType={'div'}
								options={masonryOptions}
								disableImagesLoaded={false}>

								{this.generatePhotoItems()}

							</Masonry>
						</section>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CollectionDetail;