var React = require('react');
var UserStore = require('../../stores/user_store');
var Masonry = require('react-masonry-component');
var ApiUtil = require('../../util/api_util');
var PhotoIndexItem = require('../photos/photos_index_item');
var Link = require('react-router').Link

//APP-TODO: possibly refactor the presentation of the photo index 
//into a nested route that can then switch between the galleries and photos

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".grid-item",
	fitWidth: true
};

var UserProfile = React.createClass({

	getInitialState: function(){
		return {
			user: UserStore.user()
		};
	},

	componentDidMount: function(){
		this.userToke = UserStore.addListener(this._onChange);
		ApiUtil.fetchUser(parseInt(this.props.params.id));
	},

	_onChange: function(){
		this.setState({user: UserStore.user()})
	},

	componentWillUnmount: function(){
		this.userToke.remove();
	},

	generateUserCollections: function(){

		if (this._userPresent()){
			return this.state.user.collections.map(function(collection, key){
				return (<div key={key}> <Link to={"collections/"+collection.id}> {collection.title} </Link> </div>)
			});
		}

	},

	generatePhotoItems: function(){
		if (this._userPresent()){
			return this.state.user.photos.map(function(photo, key){
				return <PhotoIndexItem key={key} photo={photo} cName="grid-item profile-image" className="photo-index-item"/>
			})
		}

	},

	_userPresent: function(){
		if (this.state.user.email){
			return true;
		} else {
			return false;
		}
	},

	render: function() {
		var current;

		if (this._userPresent() && this.props.current){
			if (this.state.user.id === this.props.current.id) {
				current = (
					<div className="user-options">

						<span className="profile-button-container">
							<Link to={"users/"+this.state.user.id+"/add_collection"}
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> Add Collection 
							</Link>
						</span>

						<span className="profile-button-container">
							<button
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> Edit Profile 
							</button>
						</span>

					</div>
				)
			}
		} else {
			current = "";
		}

		return (

			<div className="wrapper user-profile group">

				<div className="user-profile-header">
					<div> {"USER AVATAR"} </div>
					<div> {this.state.user.email} </div>
					<div> {current} </div>
				</div>

				<section className="collection-container">
					<h3> Collections </h3>
					{this.generateUserCollections()}

				</section>

				<section className="user-photos">
					<h3> Photos </h3>
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
		);
	}
});





module.exports = UserProfile;