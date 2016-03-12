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
var ModalStore = require('./stores/modal_store');

var App = React.createClass({

	getInitialState: function(){
		return {
			current: SessionStore.currentUser(),
			modal: {show: false}
		};
	},

	componentWillReceiveProps: function(nextProps){

		if((nextProps.location.key !== this.props.location.key)){
			this.setState({modal: {show: false}})
		}

		if((nextProps.modal)){
			this.setState({modal: nextProps.modal})
		}

	},

	componentDidMount: function(){
		this.toke = SessionStore.addListener(this._onChange);
		this.modalToke = ModalStore.addListener(this._onModalChange);
		SessionUtil.fetchCurrent();
	},

	_onModalChange: function(){
		this.setState({modal: ModalStore.modal()})
	},

	_onChange: function(){
		this.setState({current: SessionStore.currentUser()});
	},

	componentWillUnmount: function(){
		this.toke.remove();
		this.modalToke.remove();
	},

  render: function() {

  	if (location.state && location.state.query){
  		var query = location.state.query;
  	}

  	var isModal = this.state.modal.show

	  return (
	      <div>
	      	<NavBar current={this.state.current} pathname={location.pathname} query={query}/>

	      	{/*isModal ?
	      		this.previousChildren && React.cloneElement(this.previousChildren, {current: this.state.current}) :
	      		this.props.children && React.cloneElement(this.props.children, {current: this.state.current}) */}

	      	{this.props.children && React.cloneElement(this.props.children, {current: this.state.current})}

	      	{isModal && (
	      		<ModalWrapper action={this.state.modal.action} user={this.state.current}>
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
