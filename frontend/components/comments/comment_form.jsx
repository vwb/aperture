var React = require('react')
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var CommentActions = require('../../actions/comment_actions');

var CommentForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
			content: "",
			photo_id: ""
		};
	},

	componentWillReceiveProps: function(newProps){
		this.setState({photo_id: newProps.photo.id})
	},

	handleSubmit: function(e){
		e.preventDefault();

		params = {
			content: this.state.content,
			photo_id: this.state.photo_id
		}
		this.setState({content: ""});
		CommentActions.createComment(params);
	},

	render: function() {

		return (



			<div className="comment-form">
				<form onSubmit={this.handleSubmit}>

					<div className="comment-input">
						<input
							type="text"
							valueLink={this.linkState("content")}
							className="form-input"
							placeholder="Leave a comment..."
							disabled={!this.props.current}/>
					</div>

				</form>
			</div>
		);
	}
});

module.exports = CommentForm;