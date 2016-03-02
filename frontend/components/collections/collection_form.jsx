var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoSelector = require('../photos/photo_selector');
var CollectionActions = require('../../actions/collection_actions');
var TagForm = require('../tags/tag_form');

var CollectionForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){

		return {
			title: "",
			description: "",
			photoIds: [],
			selectedTags: []
		};
	},

	handleSubmit: function(e){
		e.preventDefault();
		var params = {
			title: this.state.title,
			description: this.state.description,
			photos: this.state.photoIds,
			tags: this.state.selectedTags
		}
		CollectionActions.createCollection(params, this.successRedirect);
	},

	successRedirect: function(id){
		this.props.history.push("/collections/"+id)
	},

	updateForm: function(selectedPhotos){
		this.setState({photoIds: selectedPhotos});
	},

	handleTags: function(tags){
		this.setState({selectedTags: tags})
	},

	render: function() {
		return (
			<div className="collection-form wrapper">
				<form onSubmit={this.handleSubmit}>
					Curate your collection...

					<section>
						<label>
							Title
							<input
								type="text"
								valueLink={this.linkState("title")}/>
						</label>
						<br/>

						<label>
							Description
							<input
								type="text"
								valueLink={this.linkState("description")}/>
						</label>
						<br/>
					</section>

					<TagForm formCallback={this.handleTags} tags={this.state.selectedTags}/>
 
					<div className="photo-selector">
						<PhotoSelector colTitle={this.state.title} updateForm={this.updateForm}/>
					</div>

					<input type="submit" value="Create Collection"/>

				</form>
			</div>
		);
	}
});

module.exports = CollectionForm;