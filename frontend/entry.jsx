var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var PhotosIndex = require('./components/photos/photos_index');
var PhotoDetail = require('./components/photos/photo_detail');
var PhotoEditForm = require('./components/photos/photo_edit_form');
var NavBar = require('./components/navigation/navbar');
var CollectionForm = require('./components/collections/collection_form');
var CollectionDetail = require('./components/collections/collection_detail');

var UserProfile = require('./components/user/user_profile');
var SessionStore = require('./stores/react_session_store');
var SessionUtil = require('./util/sessions_util');
var CreateUserForm = require('./components/sessions/create_user_form');

var ModalWrapper = require('./components/modals/modal_wrapper');

require('./util/api_util');


var App = React.createClass({

	getInitialState: function(){
		return {
			current: SessionStore.currentUser()
		};
	},

	componentWillReceiveProps: function(nextProps){
		if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      this.previousChildren = this.props.children;
    }
	},

	componentDidMount: function(){
		this.toke = SessionStore.addListener(this._onChange);
		SessionUtil.fetchCurrent();
	},

	_onChange: function(){
		this.setState({current: SessionStore.currentUser()});
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

  render: function() {


  	var location = this.props.location;

  	var isModal = (
  		location.state && location.state.modal && this.previousChildren
  	);

	  return (
	      <div>
	      	<NavBar current={this.state.current} pathname={location.pathname}/>

	      	{isModal ?
	      		this.previousChildren && React.cloneElement(this.previousChildren, {current: this.state.current}) :
	      		this.props.children && React.cloneElement(this.props.children, {current: this.state.current}) }

	      	{isModal && (
	      		<ModalWrapper returnTo={location.state.returnTo} action={location.state.action}>
	      			{this.props.children}
	      		</ModalWrapper>
	      	)}

	      </div>
	  );
	}

});

var routes = (
	<Router>

		<Route path="/" component={App}>

			<IndexRoute component={PhotosIndex}/>

			<Route path="user/sign_up" component={CreateUserForm}/>
			<Route path="users/:id" component={UserProfile}/>
			
			<Route path="users/:id/add_collection" component={CollectionForm}/>
			<Route path="collections/:id" component={CollectionDetail}/>

			<Route path="photos" component={PhotosIndex}/>



		</Route>


		<Route path="/photos/:id" component={PhotoDetail}>
			<Route path="edit" component={PhotoEditForm}/>
		</Route>


	</Router>
);

document.addEventListener("DOMContentLoaded", function () {

	var appElement = document.getElementById('content');
  ReactDOM.render(routes, appElement);
});


			// <Route path="user/sign_in" component={ModalWrapper}/>

			// <Route path="upload" component={ModalWrapper}/>



