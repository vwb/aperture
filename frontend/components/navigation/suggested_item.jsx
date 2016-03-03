var React = require('react')

var SuggestedItem = React.createClass({

	render: function() {
		return (
			<span className="suggested-item" onClick={this.props.selectCallBack}>{this.props.title}</span>
		);
	}
});

module.exports = SuggestedItem;