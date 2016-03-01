var React = require('react');

var TagItem = React.createClass({

	renderTags: function(){
		if (typeof this.props.tag === "string"){
			return this.props.tag
		} else {
			return this.props.tag.title
		}
	},

	render: function() {
		return (
			<span className="tag-item">
				{this.renderTags()} 
			</span>
		);
	}
});

module.exports = TagItem;