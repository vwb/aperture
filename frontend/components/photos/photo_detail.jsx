var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoEditForm = require('./photo_edit_form');
var ApiUtil = require('../../util/api_util');
var SessionUtil = require('../../util/sessions_util');
var SessionStore = require('../../stores/react_session_store');
var CollectionToggle = require('../collections/collection_toggle');
var Link = require('react-router').Link
var Comments = require('../comments/comments');
var TagItems = require('../tags/tag_items');

var PhotoDetail = React.createClass({

	getInitialState: function(){
		return{
			photo: PhotoStore.find_by_id(parseInt(this.props.params.id)),
			current: SessionStore.currentUser()
		};
	},

	componentDidMount: function(){
		this.toke = PhotoStore.addListener(this._onChange);
		this.sessionToke = SessionStore.addListener(this._onSessionChange);

		if (!this.state.current){
			SessionUtil.fetchCurrent();
		}
	},

	_onChange: function(){
		this.setState({photo: PhotoStore.find_by_id(parseInt(this.props.params.id))})
	},

	_onSessionChange: function(){
		this.setState({current: SessionStore.currentUser()})
	},

	componentWillUnmount: function(){
		this.toke.remove();
		this.sessionToke.remove();
	},

	_photoPresenceCheck: function(){
		if (this.state.photo){
			this.havePhoto = true;
		} else {
			this.havePhoto = false;
			ApiUtil.fetchAllPhotos();
		}
	},

	handleEdit: function(){
		if (this.props.location.pathname.indexOf("edit") > -1){
			this.props.history.push("photos/"+this.state.photo.id);
		} else {
			this.props.history.push("photos/"+this.state.photo.id+"/edit");
		}
	},

	handleOuterClick: function(e){

		if (e.currentTarget.className === "photo-detail"){
			this.props.history.goBack()
			//check if goback empty
		}

	},

	handleInnerClick: function(e){

		e.stopPropagation();

	},

	render: function() {

		var check = "";

		this._photoPresenceCheck();

		if (this.havePhoto){

			if (this.state.current){

				if (this.state.photo.user_id === this.state.current.id){
					check = (
						<button 
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
							onClick={this.handleEdit}> 
								Edit Image 
						</button>);
				} 
			}
			return (
				<div className="photo-detail-cotainer group">

					<div className="photo-detail" onClick={this.handleOuterClick}>
							<img className="img-detail" src={this.state.photo.url} onClick={this.handleInnerClick}/>
					</div>

					<section className="photo-info">

						{/* Split this into a new component 
								Also going to need to have an
								add to collection option here */}

						<p>Title: {this.state.photo.title}</p>
						<p>Description: {this.state.photo.description}</p>
						<p>Price: {this.state.photo.price}</p>

						<section className="tag-section">
							Tags:
							<TagItems tags={this.state.photo.tags}/>
						</section>

						<br/>

						<CollectionToggle photo={this.state.photo} currentUser={this.state.current} />

						<br/>

						{check}

						<br/>

						{this.props.children}

						<Comments photo={this.state.photo}/>
						
					</section>

				</div>
			);
		} else {
			return (<div className="loader">Just a minute...</div>);
		}
	}
});

module.exports = PhotoDetail;