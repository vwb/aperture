var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var PhotoEditForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
				title: this.props.photo.title,
				price: this.props.photo.price
			};
	},

	handleSubmit: function(e){

		e.preventDefault();

		var params = {
			title: this.state.title,
			price: this.state.price
		};

		ApiUtil.updatePhoto(this.props.photo.id, params);
	},

	handleDelete: function(e){
		ApiUtil.deletePhoto(this.props.photo.id);
		this.history.push("/");
	},

	render: function() {
		return (

			<div className="PhotoEditForm">
				<h2> Edit Photo </h2>
				<form onSubmit={this.handleSubmit}>

					<label htmlFor="title">Title</label>
					<input
						type="text"
						valueLink={this.linkState("title")}
						id="title"/>
					<br/>

					<label htmlFor="price">Price</label>
					<input
						type="text"
						valueLink={this.linkState("price")}
						id="price"/>
					<br/>

					<input type="submit" value="Confirm Edits"/>

				</form>

				<button onClick={this.handleDelete}>Delete Photo</button>
			</div>
		);
	}
});

module.exports = PhotoEditForm;