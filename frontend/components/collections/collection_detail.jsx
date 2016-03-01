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


	render: function() {
		var title;
		if (this.state.collection){
			title = this.state.collection.title;
		}

		return (
			<div className="wrapper">

				<section className="collection-header">
					{/*<CollectionDetailHeader collection={this.state.collection}/>*/}
					<h1> {title} </h1>
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
		);
	}
});

module.exports = CollectionDetail;