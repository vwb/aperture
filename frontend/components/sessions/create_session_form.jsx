var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../../util/sessions_util');
var History = require('react-router').History;
var ErrorIndex = require('../util/error_index');
var TypistForm = require('../util/typist_form');


var Modal = require('boron/OutlineModal');

var SignInForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
			email: "",
			password: "",
			errors: [],
			typist: false
		};
	},

	handleSubmit: function(e){
		e.preventDefault();
		var errorList = [];

		debugger;

		if (this.state.email === ""){
			errorList.push("Email cannot be blank.")
		}

		if (this.state.password === ""){
			errorList.push("Password cannot be blank.")
		} 

		var params = {
			email: this.state.email,
			password: this.state.password
		};

		if (errorList.length > 0){
			this.setState({errors: errorList})
		} else {
			SessionUtil.createSession(params, this.successRedirect, this.errorHandler)
		}

	},

	errorHandler: function(data){
		this.setState({errors: data.error})
	},

	handleSignUp: function(e){
		e.preventDefault();

		this.history.replace({
        pathname: this.props.pathname,
        state: {modal: true, returnTo: this.props.pathname, action: "sign_up"}
     });
	},

	successRedirect: function(){
		this.props.closeModal();
	},

	handleGuestAccount: function(){
		var params = {
			email: "sample@email.com",
			password: "password"
		}

		SessionUtil.createSession(params, this.successRedirect, this.errorHandler);
	},

	render: function() {

		// if (this.state.typist){
		// 	return (<TypistForm />)
		// } else {
			
			return (

				<div className="form-container center noSelect">

					<div className="modal-header">
						Sign In
					</div>

					<form onSubmit={this.handleSubmit} className="session-form">

						<div className="error-container">
							<ErrorIndex errors={this.state.errors}/>
						</div>
						
						<div className="form-input-container">
							<input
								type="text"
								valueLink={this.linkState("email")}
								placeholder="sample@email.com"
								className="form-input"
								placeholder="Email"/>
						</div>

						<div className="form-input-container">
							<input
								type="password"
								valueLink={this.linkState("password")}
								className="form-input"
								placeholder="Password"/>
						</div>

						<div className="form-button-container">

							<div className="form-spacer">
								<input 
									type="submit" 
									value="Sign In"
									className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"/>
							</div>

							<div className="form-spacer">
								<button 
									onClick={this.handleSignUp}
									className="mdl-button mdl-js-button mdl-button--colored">
										Sign Up
								</button>
							</div>

						</div>

					</form>

						<div className="form-spacer" id="guest-login-button">
							<button 
								onClick={this.handleGuestAccount}
								className="mdl-button mdl-js-button mdl-button--colored">
									guest login
							</button>
						</div>

				</div>
			);
			//}
	}
});




module.exports = SignInForm