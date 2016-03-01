var React = require('react');

var PhotoThumb = React.createClass({

	clickHandler: function(e){
		this.props.updateForm(e.currentTarget.src, this.props.ind);
	},

	render: function() {
		return (
			<span className={this.props.cName} >
				<img onClick={this.clickHandler} src={this.props.photo.url} />
			</span>
		);
	}
});

module.exports = PhotoThumb;