var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../../util/sessions_util');

var Modal = require('boron/OutlineModal');

var SignInForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		return {
			email: "",
			password: ""
		};
	},

	handleSubmit: function(e){
		e.preventDefault();

		var params = {
			email: this.state.email,
			password: this.state.password
		};

		SessionUtil.createSession(params, this.successRedirect)
	},

	handleSignUp: function(e){
		e.preventDefault();
		this.props.history.push("user/sign_up");
	},

	//any way to push "back" to where the use was before they logged in?
	successRedirect: function(){
		this.props.closeModal();
	},

	render: function() {
		
		return (

				<div className="form-container center noSelect">

					<div className="modal-header">
						Sign In
					</div>

					<form onSubmit={this.handleSubmit} className="session-form">
						
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

			</div>
		);
	}
});




module.exports = SignInForm