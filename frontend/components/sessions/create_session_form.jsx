var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionUtil = require('../../util/sessions_util');

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
		this.props.history.push("/");
	},

	render: function() {
		
		return (
			<div className="wrapper">

				<form onSubmit={this.handleSubmit}>
					Sign In!
					<br/>
					
					<label htmlFor="email">
						Email:
						<input
							type="text"
							valueLink={this.linkState("email")}
							placeholder="sample@email.com"/>
					</label>
					<br/>

					<label htmlFor="password">
						Password:
						<input
							type="password"
							valueLink={this.linkState("password")}/>
					</label>
					<br/>

					<input type="submit" value="Sign In"/>

				</form>

				<button onClick={this.handleSignUp}> Sign Up! </button>

			</div>
		);
	}
});

module.exports = SignInForm