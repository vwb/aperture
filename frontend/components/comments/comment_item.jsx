var React = require('react');

var CommentItem = React.createClass({
	getInitialState: function(){
		return {
			comment: this.props.comment
		};
	},

	// componentWillReceiveProps: function(newProps){
	// 	debugger;
	// 	this.setState({comment: newProps.comment})
	// },

	content: function(){
		if (this.state.comment){
			return (
				<li className="comment-item">
					<section className="comment-header">
						{this.state.comment.user_id}	
					</section>
					<section className="comment-body">
						{this.state.comment.content}
					</section>
				</li>
			)
		}
	},

	render: function() {
		return (
			<div>{this.content()}</div>
		);
	}
});

module.exports = CommentItem;