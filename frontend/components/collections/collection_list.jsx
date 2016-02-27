var React = require('react');

var CollectionList = React.createClass({

	generateCollectionItems: function(){

		if (this.props.collections){
			debugger;
			return this.props.collections.map(function(collection, ind){
				return <li key={ind} onClick={this.collectionSelect} id={collection.id}> {collection.title} </li>
			}.bind(this))
		}

	},

	collectionSelect: function(e){
		var collectionId = parseInt(e.currentTarget.id);
		//make a call adding current photo to this collection!
		this.props.addPhotoCallBack(collectionId);
	},

	render: function() {
		return (
			<div className={this.props.cName}>
				<ul>

					{this.generateCollectionItems()}

				</ul>
			</div>
		);
	}
});

module.exports = CollectionList;