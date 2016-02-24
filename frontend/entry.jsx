var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var PhotosIndex = require('./components/photos_index');
var PhotoDetail = require('./components/photo_detail');


require('./util/api_util');

var App = React.createClass({
  render: function(){
	  return (
	      <div>
	        <header><h1>Aperture</h1></header>
	        {this.props.children}
	      </div>
	  );
	}
});

var routes = (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={PhotosIndex}/>
			<Route path="photos/:id" component={PhotoDetail}/>
		</Route>
	</Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});