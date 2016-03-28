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
var ModalWrapper = require('../modals/modal_wrapper');
var ModalStore = require('../../stores/modal_store');
var History = require('react-router').History

var PhotoDetail = React.createClass({

	getInitialState: function(){
		return{
			photo: "",
			current: SessionStore.currentUser(),
			modal: {show: false}
		};
	},

	componentDidMount: function(){
		this.toke = PhotoStore.addListener(this._onChange);
		this.sessionToke = SessionStore.addListener(this._onSessionChange);
		this.modalToke = ModalStore.addListener(this._onModalChange);


		$(document.body).on('keydown', this.handleKey);

		if (!this.state.current){
			SessionUtil.fetchCurrent();
		}
	},

	componentWillReceiveProps: function(newProps){
		if((newProps.modal)){
			this.setState({modal: newProps.modal})
		}
	},

	_onChange: function(){
		this.setState({photo: PhotoStore.find_by_id(parseInt(this.props.params.id))})
	},

	_onSessionChange: function(){
		this.setState({current: SessionStore.currentUser()})
	},

	_onModalChange: function(){
		this.setState({modal: ModalStore.modal()})
	},

	componentWillUnmount: function(){
		this.toke.remove();
		this.sessionToke.remove();
		this.modalToke.remove();
		$(document.body).off('keydown', this.handleKey);
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

		if (e.which === 37){
			this.grabSequential("prev")
		} else if (e.which === 39){
			this.grabSequential("next")
		}
	},

	grabSequential: function(action){

		var ind;
		var next;
		var prev;

		if (this.props.location.state && this.props.location.state.photos){
			var photos = this.props.location.state.photos
			ind = photos.indexOf(this.state.photo.id)
			next = (ind + 1) % photos.length
			if (ind-1 < 0){
				prev = photos.length - 1
			} else {
				prev = ind - 1
			}			
		} 

		switch (action){
			case "prev":
				this.setState({photo: PhotoStore.find_by_id(photos[prev])});
				break;
			case "next":
				this.setState({photo: PhotoStore.find_by_id(photos[next])})
				break;
		}
	},

	closeDetail: function(){

		this.props.history.goBack()


	},

	tagSearch: function(tag){
		this.props.history.push({path: "/", state: {val: tag}})
	},

	render: function() {

		var editCheck = "";
		var collectionCheck = "";

		var isModal = this.state.modal.show;

		this._photoPresenceCheck();

		if (this.havePhoto){
			if (this.state.current && this.state.photo.user.id === this.state.current.id){
				editCheck = (
					<button 
						className="mdl-button mdl-js-button mdl-button--colored"
						onClick={this.handleEdit}> 
							Edit Image 
					</button>);
			} 		

			return (

				<div className="photo-detail-cotainer group fade-in" tabIndex="1">

					<div className="photo-detail" onClick={this.handleOuterClick}>
							<img className="img-detail" src={this.state.photo.url} onClick={this.handleInnerClick}/>
					</div>

					<section className="photo-info">

						<CloseButton action={this.closeDetail} />
	          <UserDetail user={this.state.photo.user}/>

	          <div className="info">
	          	<div className="detail-title"> {this.state.photo.title} </div>
	          	<div className="detail-description"> {this.state.photo.description} </div>
	          </div>

						<section className="tag-section">
							<span> Tags: </span>
							<TagItems tags={this.state.photo.tags} clickHandler={this.tagSearch}/>
						</section>

						<CollectionToggle photo={this.state.photo} currentUser={this.state.current}/>

						{editCheck}

						{this.props.children}

						<Comments photo={this.state.photo} current={this.state.current}/>
						
					</section>

					{isModal && (
						<ModalWrapper action={this.state.modal.action} user={this.state.current}>
							{this.props.children}
						</ModalWrapper>
					)}

				</div>
			);
		} else {
			return (<div className="loader">Loading...</div>);
		}
	}
});

module.exports = PhotoDetail;