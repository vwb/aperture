var React = require('react');
var History = require('react-router').History;

var CollectionIndexItem = React.createClass({

	mixins: [History],

	selectCoverImage: function(){
		var collection = this.props.collection
		if (collection.photos.length > 0){
			return collection.photos[0].url
		} else if (collection.cover_photo){
			return collection.cover_photo
		} else {
			return ""
		}
	},

	handleClick: function(){
		this.history.push("/collections/"+this.props.collection.id)
	},

	render: function() {
		return (
			<div className="collection-index-item" onClick={this.handleClick}>
				<div className="img-container">
					<img src={this.selectCoverImage()}/>
				</div>
				<div>
					{this.props.collection.title}
				</div>
				<div>
					{this.props.collection.description}
				</div>
			</div>
		);
	}
});

module.exports=CollectionIndexItem;