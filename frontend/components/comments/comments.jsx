var React = require('react');
var CommentItem = require('./comment_item');
var CommentForm = require('./comment_form');

var Comments = React.createClass({

	getInitialState: function(){
		return {
			comments: this.props.photo.comments,
			photo: this.props.photo
		};
	},

	generateComments: function(){
		if (this.state.comments){
			return this.state.comments.map(function(comment, ind){
				return <CommentItem comment={comment} key={ind}/>
			})
		}
	},

	render: function() {
		return (
			<div className="comment-container">

				<h4>Comments</h4>
				<CommentForm photo={this.state.photo} current={this.props.current}/>
				<ul className="comment-list">
					{this.generateComments()}
				</ul>
				
			</div>
		);
	}
});

module.exports = Comments