var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionsUtil = require('../../util/sessions_util');

var SignUpForm = React.createClass({

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

		SessionsUtil.createUser(params, this.successRedirect);
	},

	successRedirect: function(){
		this.props.history.push("/");
	},

	render: function() {
		return (
			<div className="wrapper">
				<form onSubmit={this.handleSubmit}>
					Sign Up!
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

					<input type="submit" value="Create Account"/>

				</form>
			</div>
		);
	}
});

module.exports = SignUpForm;