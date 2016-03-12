var React = require('react');
var UserStore = require('../../stores/user_store');
var Masonry = require('react-masonry-component');
var ApiUtil = require('../../util/api_util');
var PhotoIndexItem = require('../photos/photos_index_item');
var Link = require('react-router').Link;
var CollectionIndex = require('../collections/collection_index');
var History = require('react-router').History;


//APP-TODO: possibly refactor the presentation of the photo index 
//into a nested route that can then switch between the galleries and photos

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".grid-item"
};

var UserProfile = React.createClass({

	mixins: [History],

	getInitialState: function(){
		return {
			user: UserStore.findUserById(parseInt(this.props.params.id))
		};
	},

	componentDidMount: function(){
		this.userToke = UserStore.addListener(this._onChange);
		if (!this.state.user){
			ApiUtil.fetchAllUsers();
		}
	},

	componentWillReceiveProps: function(newProps){
		this.setState({user: UserStore.findUserById(parseInt(newProps.params.id))})
	},

	_onChange: function(){
		this.setState({user: UserStore.findUserById(parseInt(this.props.params.id))})
	},

	componentWillUnmount: function(){
		this.userToke.remove();
	},

	generatePhotoItems: function(){
		if (this._userPresent()){

			return this.state.user.photos.map(function(photo, key){
				return <PhotoIndexItem key={key} photo={photo} cName="grid-item profile-image" className="photo-index-item"/>
			})
		}

	},

	_userPresent: function(){
		if (this.state.user && this.state.user.email){
			return true;
		} else {
			return false;
		}
	},

	handleBackgroundImage: function(){
		if (this._userPresent()){
			if (this.state.user.photos && this.state.user.photos.length > 0){
				return this.state.user.photos[0].url
			} else {
				return ""
			}
		}
	},

	handleEdit: function(e){
		e.preventDefault();

	   this.history.push({
      pathname: this.props.location.pathname,
      state: {modal: true, returnTo: this.props.location.pathname, action: "edit_profile", user: this.state.user}
    });
	},

	handleCollection: function(e){
		e.preventDefault();

		this.history.push({
      pathname: this.props.location.pathname,
      state: {modal: true, returnTo: this.props.location.pathname, action: "new_collection"}
    });
	},



	render: function() {
		var current, 
				collections,
				username,
				avatar,
				email;

		if (this._userPresent()){
			collections = this.state.user.collections
			username = this.state.user.username
			avatar = this.state.user.avatar
			email = this.state.user.email
			if (this.props.current && this.state.user.id === this.props.current.id) {
				current = (
					<div className="user-options">

						<span className="profile-button-container">
							<button onClick={this.handleCollection}
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> Add Collection 
							</button>
						</span>

						<span className="profile-button-container">
							<button
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
							onClick={this.handleEdit}> 
								Edit Profile 
							</button>
						</span>

					</div>
				)
			}
		} 
		return (
			<div className="parallax">

				<div className="parallax__layer parallax__layer--back background">
					<img src={this.handleBackgroundImage()}/>
				</div>

				<div className="parallax__layer parallax__layer--base group">

					<div className="user-profile">

						<div className="user-profile-header">
							<div className="profile-picture circle"> 
								<img src={avatar} />
							</div>

							<div className="profile-info"> 
								{username} 
							</div>

							<div className="profile-actions"> 
								{current}
							 </div>
						</div>

						<section className="user-prof-collection">

							<div className="header-spacer">
								<h3> Collections </h3>
							</div>

							<CollectionIndex collections={collections}/>
						</section>

					{/* USER PHOTOS CAN BE FACTORED OUT */}

						<section className="user-photos">
							<div className="header-spacer"> 
								<h3> Photos </h3>
							</div>

							<Masonry
								className={'grid'}
								elementType={'div'}
								options={masonryOptions}
								disableImagesLoaded={false}>

								{this.generatePhotoItems()}

							</Masonry>
							
						</section>

					{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});





module.exports = UserProfile;