var React = require('react');

var PhotoThumb = React.createClass({

	clickHandler: function(e){
		this.props.updateForm(e.currentTarget.src, this.props.ind);
	},
	//need some way to have the class only appear on the one that is being clicked... like a singleton
	//class....
	//i want to select the element that was clicked on. but if they click on a sister of this then there should
	//only be one.

	render: function() {
		return (
			<span className={this.props.cName} >
				<img onClick={this.clickHandler} src={this.props.photo.url} />
			</span>
		);
	}
});

module.exports = PhotoThumb;