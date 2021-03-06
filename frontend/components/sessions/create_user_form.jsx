var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionsUtil = require('../../util/sessions_util');
var History = require('react-router').History;
var ErrorIndex = require('../util/error_index');

var SignUpForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
			email: "",
			password: "",
			username: "",
			passwordConfirmation: "",
			errors: []
		};
	},

	handleSubmit: function(e){
		e.preventDefault();

		var params = {
			email: this.state.email,
			password: this.state.password,
			username: this.state.username
		};

		var errorList = [];
		if (this.state.password !== this.state.passwordConfirmation){
			errorList.push("Passwords do not match.")
		}

		if (this.state.username === ""){
			errorList.push("Username cannot be blank.")
		} 

		if (this.state.email === ""){
			errorList.push("Email cannot be blank.")
		}

		if (errorList.length > 0){
			
			this.setState({errors: errorList})

		} else {
			SessionsUtil.createUser(params, this.successRedirect, this.errorHandler);
		}
	},

	errorHandler: function(data){
		this.setState({errors: data.error})
	},

	handleSignIn: function(e){
		e.preventDefault();
		this.history.replace({
      pathname: this.props.pathname,
      state: {modal: true, returnTo: this.props.pathname, action: "sign_in"}
   	});	
	},

	successRedirect: function(id){
		this.history.push("/users/"+id);
	},

	render: function() {
		return (
			<div className="form-container center">

				<div className="modal-header">
					New Account
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
							type="text"
							valueLink={this.linkState("username")}
							className="form-input"
							placeholder="Username"/>
					</div>

					<div className="form-input-container">
						<input
							type="password"
							valueLink={this.linkState("password")}
							className="form-input"
							placeholder="Password"/>
					</div>

					<div className="form-input-container">
						<input
							type="password"
							valueLink={this.linkState("passwordConfirmation")}
							className="form-input"
							placeholder="Confirm Password"/>
					</div>

					<div className="form-button-container">
						<div className="form-spacer">
							<input 
								type="submit" 
								value="Create Account"
								className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"/>
						</div>

						<div className="form-spacer">
							<button 
								onClick={this.handleSignIn}
								className="mdl-button mdl-js-button mdl-button--colored">
									Sign In
							</button>
						</div>
					</div>

				</form>
			</div>
		);
	}
});

module.exports = SignUpForm;