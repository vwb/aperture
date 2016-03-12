var React = require('react');
var CollectionList = require('./collection_list');
var RaisedButton = require('material-ui').RaisedButton;
var CollectionActions = require('../../actions/collection_actions');
var CollectionStore = require('../../stores/collection_store');
var ModalActions = require('../../actions/modal_actions');

var CollectionToggle = React.createClass({

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

	componentDidMount: function(){
		this.toke = CollectionStore.addListener(this._onChange);
	},

	_onChange: function(){
		this.setState({collections: CollectionStore.all()})
	},

	componentWillReceiveProps: function(newProps){
		if (newProps.currentUser){
			CollectionActions.fetchUserCollections(newProps.currentUser.id);
		}
	},

	handleClick: function(){
		if (this.props.currentUser){
			this.toggle();
		} else {
			ModalActions.showModal("sign_in");
		}
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	addPhotoToCollection: function(collectionId){
		CollectionActions.addPhoto(collectionId, this.props.photo.id);
	},

	removePhotoFromCollection: function(collectionId){
		CollectionActions.removePhoto(collectionId, this.props.photo.id);
	},

	render: function() {

		var list = ""


		if (this.props.currentUser) {
			list = (
				<CollectionList 
					cName={this.state.className} 
					collections={this.state.collections}
					addPhotoCallBack={this.addPhotoToCollection}
					removePhotoCallBack={this.removePhotoFromCollection}
					photo={this.props.photo}  />
			);
		};


		return (

			<div className="collection-list-container">
				<button 
					onClick={this.handleClick}
					className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
					id="collection-list">
						<span> Add to Collections </span>
						<i className="material-icons">collections</i>
				</button>

				{list}

			</div>

		);
	}
});



module.exports = CollectionToggle;