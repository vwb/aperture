var React = require('react');
var CollectionList = require('./collection_list');
var RaisedButton = require('material-ui').RaisedButton;

var CollectionAdd = React.createClass({

	getInitialState: function(){
		return {
			className: "collection-list",
			collections: ""
		};
	},

	toggle: function(){
		var name = (this.state.className === "collection-list") ? "collection-list visible" : "collection-list";
		this.setState({className: name})
	},

	componentWillReceiveProps: function(newProps){
		this.setState({collections: newProps.currentUser.collections});
	},

	handleClick: function(){
		this.toggle();
	},

	addPhotoToCollection: function(collectionId){
		CollectionActions.addPhoto(collectionId, this.state.photo.id);
		//Some way to signify success!
	},

	render: function() {
		return (

			<div className="collection-container">
				<button 
					onClick={this.handleClick}
					className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
					id="collection-list">
						<span> Add to Collections </span>
						<i className="material-icons">collections</i>

				</button>
				<CollectionList 
					cName={this.state.className} 
					collections={this.state.collections}
					addPhotoCallBack={this.addPhotoToCollection}  />

			</div>

		);
	}
});



module.exports = CollectionAdd;