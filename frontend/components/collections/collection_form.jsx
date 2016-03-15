var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoSelector = require('../photos/photo_selector');
var CollectionActions = require('../../actions/collection_actions');
var History = require('react-router').History;
var ErrorIndex = require('../util/error_index');

var CollectionForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){

		return {
			title: "",
			description: "",
			photoIds: [],
			errors: []
		};
	},

	handleSubmit: function(e){
		e.preventDefault();
		var params = {
			title: this.state.title,
			description: this.state.description,
			photos: this.state.photoIds,
		}
		CollectionActions.createCollection(params, this.successRedirect, this.errorHandler);
	},

	errorHandler: function(data){
		this.setState({errors: data.error})
	},

	successRedirect: function(id){
		this.props.closeModal();
		this.history.push("/collections/"+id)
	},

	updateForm: function(selectedPhotos){
		this.setState({photoIds: selectedPhotos});
	},

	render: function() {
		return (
			<div className="collection-form-container">

			<div className="modal-header">
				Curate your collection...
			</div>

				<form onSubmit={this.handleSubmit} className="collection-form center">

						<div className="error-container">
							<ErrorIndex errors={this.state.errors}/>
						</div>

					<section>

						<div className="form-input-container">
							<input
								type="text"
								valueLink={this.linkState("title")}
								className="form-input"
								placeholder="Title"/>
						</div>

						<div className="form-input-container">
							<input
								type="text"
								valueLink={this.linkState("description")}
								className="form-input"
								placeholder="Description"/>
						</div>

					</section>

					<div className="form-tip">
						Choose some photos from below to get your collection started.
					</div>
 
					<div className="photo-selector">
						<PhotoSelector colTitle={this.state.title} updateForm={this.updateForm}/>
					</div>

					<div id="photo-counter">
						{this.state.photoIds.length} photos selected
					</div>


					<input 
						type="submit" 
						value="Create Collection"
						className="mdl-button mdl-button--raised mdl-js-button mdl-button--colored"/>

				</form>
			</div>
		);
	}
});

module.exports = CollectionForm;