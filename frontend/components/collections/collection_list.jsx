var React = require('react');

var CollectionList = React.createClass({

	generateCollectionItems: function(){

		if (this.props.collections){

			var title = "";
			var imgName = "";
			var cName = ""


			return this.props.collections.map(function(collection, ind){
				title = collection.title;
				imgName = "../../assets/unselected_list.png";
				cName = ""

				for (var i = 0; i < collection.photos.length; i++) {
					if (collection.photos[i].id === this.props.photo.id){

						imgName = "../../assets/selected_list.png";
						cName = "included"

					}
				}

				return (
					<div 
						className={"collection-list-wrapper "+cName} 
						key={ind}
						onClick={this.collectionSelect}
						onClick={this.collectionSelect}
						id={collection.id}>

						<div className="toggle-container">
							<img className="fade-in" src={imgName}/>
						</div>

						<li className="item"> 
							{title}
						</li>

					</div>
					)

			}.bind(this))
		}

	},

	collectionSelect: function(e){
		var collectionId = parseInt(e.currentTarget.id);

		if (e.currentTarget.className.indexOf("included") === -1){
			this.props.addPhotoCallBack(collectionId);
		} else {
			this.props.removePhotoCallBack(collectionId);
		}
	},

	render: function() {
		return (
			<div >
				<ul className={this.props.cName}>
					{this.generateCollectionItems()}
				</ul>
			</div>
		);
	}
});

module.exports = CollectionList;