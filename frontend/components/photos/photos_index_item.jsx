var React = require('react');
var History = require('react-router').History

var PhotoIndexItem = React.createClass({

	mixins: [History],

	handleClick: function(){
		this.history.push("/photos/"+this.props.photo.id);
	},

	render: function() {
		return (
			<section className="photo-index-item">
				<img onClick={this.handleClick} src={this.props.photo.url}/>
			</section>
		);
	}
	
});

module.exports = PhotoIndexItem;