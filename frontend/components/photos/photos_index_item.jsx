var React = require('react');
var History = require('react-router').History

var PhotoIndexItem = React.createClass({

	mixins: [History],

	handleClick: function(){
		this.history.push("photos/"+this.props.photo.id);
	},

	render: function() {
		return (
			<div className={this.props.cName}>
				<img onClick={this.handleClick} src={this.props.photo.url}/>
			</div>
		);
	}
	
});

module.exports = PhotoIndexItem;