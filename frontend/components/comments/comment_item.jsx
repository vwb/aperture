var React = require('react');
var History = require('react-router').History

var CommentItem = React.createClass({

	mixins: [History],

	getInitialState: function(){
		return {
			comment: this.props.comment
		};
	},

	handleClick: function(){
		this.history.push("/users/"+this.state.comment.user.id);
	},

	content: function(){
		if (this.state.comment){
			return (
				<li className="comment-item">

					<section className="comment-header">

						<div className="comment-img-container" onClick={this.handleClick}>
							<img src={this.state.comment.user.avatar}	/>
						</div>

					</section>

					<section className="comment-body">
					
						<div className="comment-user-info" onClick={this.handleClick}>
							{this.state.comment.user.username}
						</div>

						<div className="comment-content">
							{this.state.comment.content}
						</div>

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