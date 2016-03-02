var React = require('react');
var PhotoButton = require('./photo_upload_button');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoThumb = require('./photo_thumb');
var ApiUtil = require('../../util/api_util');
var TagForm = require('../tags/tag_form');

var PhotoForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		this.currentPhoto = {};

		return {
			title: "",
			description: "",
			price: 0,
			photos: [],
			selectedTags: "",
			highLighted: "",
			visible: "hidden"
		}
	},

	handleSubmit: function(){
		this.saveInfo();

		var options = {
			totalImages: this.state.photos.length-1,
			callBack: this.successRedirect
		}

		this.state.photos.forEach(function(photoObject, ind){

			debugger;


			options["currentInd"] = ind;
			ApiUtil.createPhoto(photoObject, options);
		});
	},

	successRedirect: function(){
		this.props.history.push("/");
	},

	handleImages: function(imageObjects){
		var currentState = this.state.photos.concat(imageObjects)
		this.setState({photos: currentState})
	},


	generateUploadedThumbnails: function(){

		return this.state.photos.map(function(photo, ind){
			var cName = "photo-thumb-container";

			if (ind === this.state.highLighted){
				cName = cName + " selected";
			}

			return <PhotoThumb 
								photo={photo} 
								key={ind} 
								ind={ind} 
								updateForm={this.updateDetailForm} 
								cName={cName}/>

		}.bind(this))
	},

	updateDetailForm: function(url, ind){

		this.setState({
			highLighted: ind,
			visible: ""
		})

		var photo = this._findPhoto(url);

		if (this.currentPhoto.url !== photo.url){
			this.saveInfo();
			this.setState({
				title: photo.title, 
				description: photo.description, 
				price: photo.price,
				selectedTags: photo.tags
			});
		}

		this.currentPhoto = photo;
	},


	saveInfo: function(){
		if (this.currentPhoto.url){
			this.currentPhoto["title"] = this.state.title;
			this.currentPhoto["description"] = this.state.description;
			this.currentPhoto["price"] = this.state.price;
			this.currentPhoto["tags"] = this.state.selectedTags;
		}
	},

	_findPhoto: function(url){
		for (var i = 0; i < this.state.photos.length; i++) {
			if (this.state.photos[i].url === url){
				return this.state.photos[i];
			}
		}
	},

	handleTags: function(tags){
		this.setState({selectedTags: tags})
	},

	render: function() {
		//refactor this form into components? this file is getting huge.
		return (
			<div className="photo-form">
				<form onSubmit={this.handleSubmit}>
					<h3> Upload Photos </h3>

					<PhotoButton handleUpload={this.handleImages}/>


					<div className="uploaded-photo-view">
						{this.generateUploadedThumbnails()}
					</div>

					<div className={this.state.visible}>
						<label>
							Title
							<input
								type="text"
								valueLink={this.linkState("title")}/>
								<br/>
						</label>

						<label>
							Description
							<input
								type="text"
								valueLink={this.linkState("description")}/>
								<br/>
						</label>

						<label>
							Price
							<input
								type="text"
								valueLink={this.linkState("price")}
								placeholder="0"/>
								<br/>
						</label>

						<TagForm formCallback={this.handleTags} tags={this.state.selectedTags}/>

					</div>

					<input
						type="submit"
						value="Upload Photos"/>

				</form>
			</div>

		);
	}
});
//want tags on tab/enter to add tag to selected tag list and clear state
module.exports = PhotoForm;