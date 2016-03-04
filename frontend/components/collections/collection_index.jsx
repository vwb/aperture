var React = require('react');
var CollectionIndexItem = require('./collection_index_item');
var Masonry = require('react-masonry-component');

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".collection-index-item",
	fitWidth: true
};

var CollectionIndex = React.createClass({

	getInitialState: function(){
		return {
			collections: this.props.collections
		};
	},

	componentWillReceiveProps: function(newProps){
		this.setState({collections: newProps.collections})
	},

	renderCollectionItems: function(){
		if (this.state.collections) {
			return this.state.collections.map(function(col, ind){
				return <CollectionIndexItem collection={col} key={ind}/>
			})
		}
	},

	render: function() {
		return (
			<div className="collection-index">
				<Masonry
					className={'grid center'}
					elementType={'div'}
					options={masonryOptions}
					disableImagesLoaded={false}>
				{this.renderCollectionItems()}
				</Masonry>
			</div>
		);
	}
});

module.exports = CollectionIndex;