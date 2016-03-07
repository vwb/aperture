var React = require('react');
var TagItem = require('./tag_item');

var TagItems = React.createClass({

	generateTagItems: function(){
		if (this.props.tags) {
			return this.props.tags.map(function(tag, ind){
				return <TagItem 
									tag={tag} 
									key={ind} 
									removeTag={this.props.removeTag}
									tagClickHandler={this.check()}/>
			}.bind(this))
		}
	},

	check: function(){
		if (this.props.clickHandler){
			return this.props.clickHandler
		};
	},

	render: function() {
		return (
			<div className="tag-items">
				<span> {this.generateTagItems()} </span>
			</div>
		);
	}
});

module.exports = TagItems;