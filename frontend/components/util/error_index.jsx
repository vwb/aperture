var React = require('react');
var ErrorIndex = React.createClass({

	renderErrors: function(){
		if (this.props.errors){
			return this.props.errors.map(function(error, ind){
				return <li key={ind} className="error-item"> {error} </li> 
			})
		}
	},

	render: function() {
		return (
			<ul className="error-list">
				{this.renderErrors()}
			</ul>
		);
	}
});

module.exports = ErrorIndex;