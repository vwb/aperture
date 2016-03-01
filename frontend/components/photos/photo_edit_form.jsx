var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var PhotoStore = require('../../stores/photo_store');

var PhotoEditForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
				title: "",
				price: "",
				photo: ""
			};
	},

	componentDidMount: function(){
		var photo = PhotoStore.find_by_id(parseInt(this.props.params.id))
		if (photo){
			this.setState({
				title: photo.title,
				price: photo.price,
				photo: photo
			})
		} 
	},

	handleSubmit: function(e){

		e.preventDefault();

		var params = {
			title: this.state.title,
			price: this.state.price
		};

		ApiUtil.updatePhoto(this.state.photo.id, params);
	},

	handleDelete: function(e){
		debugger;
		ApiUtil.deletePhoto(this.state.photo.id);
		this.history.push("/");
	},

	successRedirect: function(){

	},

	render: function() {
		return (

			<div className="PhotoEditForm">

				<h3> Edit Image </h3>
				
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