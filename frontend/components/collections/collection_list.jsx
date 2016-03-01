var React = require('react');

var CollectionList = React.createClass({

	generateCollectionItems: function(){

		if (this.props.collections){

			var title = "";

			return this.props.collections.map(function(collection, ind){
				title = collection.title;

				//nested for loop here... need to optimize some how. Possibly as objects?

				for (var i = 0; i < collection.photos.length; i++) {
					if (collection.photos[i].id === this.props.photo.id){
						title += " (included)";
					}
				}

				return (<li 
								key={ind} 
								onClick={this.collectionSelect} 
								id={collection.id}> 
									{title}
							</li>)

			}.bind(this))
		}

	},

	collectionSelect: function(e){
		var collectionId = parseInt(e.currentTarget.id);

		if (e.currentTarget.innerHTML.indexOf("included") === -1){
			this.props.addPhotoCallBack(collectionId);
		} else {
			this.props.removePhotoCallBack(collectionId);
		}
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