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
var PhotoForm = require('./components/photos/photo_form');
var CollectionForm = require('./components/collections/collection_form');
var CollectionDetail = require('./components/collections/collection_detail');

var UserProfile = require('./components/user/user_profile');
var SessionStore = require('./stores/react_session_store');
var SessionUtil = require('./util/sessions_util');
var CreateUserForm = require('./components/sessions/create_user_form');
var CreateSessionForm = require('./components/sessions/create_session_form');

require('./util/api_util');


var App = React.createClass({

	getInitialState: function(){
		return {
			current: SessionStore.currentUser()
		};
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

  render: function(){

	  return (
	      <div>
	      	<NavBar current={this.state.current}/>
	        {this.props.children && React.cloneElement(this.props.children, {current: this.state.current})}
	      </div>
	  );
	}
});

var routes = (
	<Router>

		<Route path="/" component={App}>

			<IndexRoute component={PhotosIndex}/>
			
			<Route path="user/sign_in" component={CreateSessionForm}/>
			<Route path="user/sign_up" component={CreateUserForm}/>
			<Route path="users/:id" component={UserProfile}/>
			
			<Route path="users/:id/add_collection" component={CollectionForm}/>
			<Route path="collections/:id" component={CollectionDetail}/>

			<Route path="photos" component={PhotosIndex}/>

		</Route>


		<Route path="/photos/:id" component={PhotoDetail}>
			<Route path="edit" component={PhotoEditForm}/>
		</Route>

		<Route path="/upload" component={PhotoForm}/>

	</Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});


