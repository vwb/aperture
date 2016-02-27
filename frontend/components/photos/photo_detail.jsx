var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoEditForm = require('./photo_edit_form');
var ApiUtil = require('../../util/api_util');
var SessionUtil = require('../../util/sessions_util');
var SessionStore = require('../../stores/react_session_store');
var CollectionAdd = require('../collections/add_to_collection');

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

	render: function() {

		var check = "";

		this._photoPresenceCheck()

		if (this.havePhoto){

			if (this.state.current){

				if (this.state.photo.user_id === this.state.current.id){
					check = <PhotoEditForm photo={this.state.photo}/>
				} 
			}

			return (
				<div className="photo-detail-cotainer group">

					<section className="photo-detail">
						<img src={this.state.photo.url}/>
					</section>

					<section className="photo-info">

						{/* Split this into a new component 
								Also going to need to have an
								add to collection option here */}

						<p>Title: {this.state.photo.title}</p>
						<p>Description: {this.state.photo.description}</p>
						<p>Price: {this.state.photo.price}</p>

						<CollectionAdd photo={this.state.photo} currentUser={this.state.current} />

						{check}
						
					</section>


				</div>
			);
		} else {
			return (<div className="loader">Just a minute...</div>);
		}
	}
});

module.exports = PhotoDetail;