var React = require('react');
var UserStore = require('../../stores/user_store');
var Masonry = require('react-masonry-component');
var ApiUtil = require('../../util/api_util');
var PhotoIndexItem = require('../photos/photos_index_item');

var masonryOptions = {
	transitionDuration: 0,
	itemSelector: ".grid-item"
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

		//return collection masonry grid of collection thumbnails

		if (this._userPresent()){
			return this.state.user.collections.map(function(collection, key){
				return (<div key={key}> {collection.title} </div>)
			});
		}

	},

	generatePhotoItems: function(){
		if (this._userPresent()){
			return this.state.user.photos.map(function(photo, key){
				return <PhotoIndexItem key={key} photo={photo} cName="grid-item" className="photo-index-item"/>
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
					<div>
						<button> Add Collection </button>
						<button> Edit Profile </button>
					</div>
				)
			}
		} else {
			current = "";
		}

		return (
			<div className="wrapper user-profile group">

				<div> {current} </div>
				<div> {this.state.user.email} </div>

				<section className="collection-container">

					{this.generateUserCollections()}

				</section>

				<section className="user-photos">

					<Masonry
						className={'grid'}
						elementType={'div'}
						options={masonryOptions}
						disableImagesLoaded={false}>

						{this.generatePhotoItems()}

					</Masonry>
				</section>

			</div>
		);
	}
});





module.exports = UserProfile;