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

	componentDidMount: function(){
		debugger;
	},

	handleSubmit: function(e){
		e.preventDefault();

		var params = {
			email: this.state.email,
			password: this.state.password
		};

		SessionUtil.createSession(params)
	},

	render: function() {
			debugger;
		
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

			</div>
		);
	}
});

module.exports = SignInForm