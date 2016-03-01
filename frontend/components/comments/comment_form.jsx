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

		CommentActions.createComment(params);
	},

	render: function() {

		return (
			<div className="CommentForm">
				<form onSubmit={this.handleSubmit}>
					<textarea valueLink={this.linkState("content")} placeholder="Leave a comment..."/>
					<br/>
					<input type="submit" value="Post Comment"/>
				</form>
			</div>
		);
	}
});

module.exports = CommentForm;