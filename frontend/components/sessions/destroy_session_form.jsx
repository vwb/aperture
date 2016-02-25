var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionsUtil = require('../../util/sessions_util');

var DestroySessionForm = React.createClass({

	mixins: [LinkedStateMixin],

	handleClick: function(){

		SessionsUtil.destroySession()
	},

	render: function() {
		return (
			<button onClick={this.handleClick}> Logout! </button>
		);
	}
});

module.exports = DestroySessionForm;