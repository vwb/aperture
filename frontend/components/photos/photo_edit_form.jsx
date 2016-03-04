var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var PhotoStore = require('../../stores/photo_store');
var TagForm = require('../tags/tag_form');

var PhotoEditForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		return {
				title: "",
				description: "",
				photo: "",
				selectedTags: ""
			};
	},

	componentDidMount: function(){
		var photo = this.props.location.state.photo
		if (photo){
			this.setState({
				title: photo.title,
				description: photo.description,
				photo: photo,
				selectedTags: photo.tags
			})
		} 
	},

	handleTags: function(tags){
		this.setState({selectedTags: tags})
	},

	handleSubmit: function(e){

		e.preventDefault();

		var params = {
			title: this.state.title,
			description: this.state.description,
			tags: this.state.selectedTags
		};

		ApiUtil.updatePhoto(this.state.photo.id, params);
	},

	handleDelete: function(e){
		ApiUtil.deletePhoto(this.state.photo.id);
		this.history.push("/");
	},

	successRedirect: function(){

	},

	render: function() {
		return (

			<div className="edit-form-container">
				
				<form onSubmit={this.handleSubmit} className="photo-edit-form">

				<div className="form-input-container">
					<input
						type="text"
						className="form-input"
						placeholder="Title"
						valueLink={this.linkState("title")}/>
				</div>

				<div className="form-input-container">
					<input
						className="form-input"
						type="text"
						placeholder="Description"
						valueLink={this.linkState("description")}/>
				</div>

				<div className="form-input-container">
					<TagForm 
						formCallback={this.handleTags} 
						tags={this.state.selectedTags}/>
				</div>

					<input type="submit" value="Confirm Edits"/>

				</form>

				<button onClick={this.handleDelete}>Delete Photo</button>
			</div>
		);
	}
});

module.exports = PhotoEditForm;