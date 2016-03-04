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
var UserDetail = require('../user/user_detail');
var CloseButton = require('../util/close_button');

var PhotoDetail = React.createClass({

	getInitialState: function(){
		return{
			photo: "",
			current: SessionStore.currentUser()
		};
	},

	componentDidMount: function(){
		this.toke = PhotoStore.addListener(this._onChange);
		this.sessionToke = SessionStore.addListener(this._onSessionChange);
		$(document.body).on('keydown', this.handleKey);

		if (!this.state.current){
			SessionUtil.fetchCurrent();
		}
	},

	_onChange: function(){
		this.setState({photo: PhotoStore.fetchPhoto()})
	},

	_onSessionChange: function(){
		this.setState({current: SessionStore.currentUser()})
	},

	componentWillUnmount: function(){
		this.toke.remove();
		this.sessionToke.remove();
		$(document.body).off('keydown', this.handleKey);

	},

	_photoPresenceCheck: function(){
		if (this.state.photo){
			this.havePhoto = true;
		} else {
			this.havePhoto = false;
			ApiUtil.fetchPhoto(this.props.params.id);
		}
	},

	handleEdit: function(){
		if (this.props.location.pathname.indexOf("edit") > -1){
			this.props.history.replace("photos/"+this.state.photo.id);
		} else {
			this.props.history.replace({
				pathname: "photos/"+this.state.photo.id+"/edit",
				state: {photo: this.state.photo}});
		}
	},

	handleOuterClick: function(e){
		if (e.currentTarget.className === "photo-detail"){
			this.closeDetail();
		}
	},

	handleInnerClick: function(e){
		e.stopPropagation();
	},

	handleKey: function(e){
		if (e.which === 27){
			this.closeDetail();
		}
	},

	closeDetail: function(){
		this.props.history.goBack()
	},

	render: function() {

		var check = "";

		this._photoPresenceCheck();

		if (this.havePhoto){

			if (this.state.current){

				if (this.state.photo.user_id === this.state.current.id){
					check = (
						<button 
							className="mdl-button mdl-js-button mdl-button--colored"
							onClick={this.handleEdit}> 
								Edit Image 
						</button>);
				} 
			}			
			return (

				<div className="photo-detail-cotainer group fade-in" tabIndex="1">

					<div className="photo-detail" onClick={this.handleOuterClick}>
							<img className="img-detail" src={this.state.photo.url} onClick={this.handleInnerClick}/>
					</div>

					<section className="photo-info">

						<CloseButton action={this.closeDetail} />
	          <UserDetail userId={this.state.photo.user_id}/>
	          <p> {this.state.photo.title} </p>
	          <p> {this.state.photo.description} </p>

						<section className="tag-section">
							<TagItems tags={this.state.photo.tags}/>
						</section>

						<CollectionToggle photo={this.state.photo} currentUser={this.state.current} />

						{check}

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