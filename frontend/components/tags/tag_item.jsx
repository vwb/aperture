var React = require('react');
var CloseButton = require('../util/close_button');

var TagItem = React.createClass({

	renderTags: function(){
		if (typeof this.props.tag === "string"){
			return this.props.tag
		} else {
			return this.props.tag.title
		}
	},

	removeTag: function(){
		this.props.removeTag(this.props.tag)
	},

	check: function(){
		if (this.props.tagClickHandler){
			this.props.tagClickHandler(this.props.tag.title)
		}
	},

	render: function() {
		return (
			<span className="tag-item" onClick={this.check}>
				{this.renderTags()} 
				<CloseButton action={this.removeTag}/>
			</span>
		);
	}

});

module.exports = TagItem;