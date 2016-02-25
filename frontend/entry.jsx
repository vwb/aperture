var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var PhotosIndex = require('./components/photos/photos_index');
var PhotoDetail = require('./components/photos/photo_detail');
var NavBar = require('./components/navigation/navbar');
var PhotoForm = require('./components/photos/photo_form');

var CreateUserForm = require('./components/sessions/create_user_form');
var CreateSessionForm = require('./components/sessions/create_session_form');

window.SessionStore = require('./stores/react_session_store');

	       


var App = React.createClass({
  render: function(){

	  return (
	      <div>
	      	<NavBar/>
	        {this.props.children}
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
		</Route>
		<Route path="photos/:id" component={PhotoDetail}/>
		<Route path="/upload" component={PhotoForm}/>
	</Router>
);

// $('.grid').masonry({
// 	itemSelector: '.grid-item'
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});