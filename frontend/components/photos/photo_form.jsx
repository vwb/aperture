var React = require('react');
var PhotoButton = require('./photo_upload_button');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoThumb = require('./photo_thumb');
var ApiUtil = require('../../util/api_util');
var TagForm = require('../tags/tag_form');
var History = require('react-router').History;

var PhotoForm = React.createClass({

	mixins: [LinkedStateMixin, History],

	getInitialState: function(){
		this.currentPhoto = {};

		return {
			title: "",
			description: "",
			photos: [],
			selectedTags: "",
			highLighted: 0,
			visible: "hidden"
		}
	},

	handleSubmit: function(e){
		e.preventDefault();
		this.saveInfo();

		var options = {
			totalImages: this.state.photos.length-1,
			callBack: this.successRedirect
		}

		this.state.photos.forEach(function(photoObject, ind){
			options["currentInd"] = ind;
			ApiUtil.createPhoto(photoObject, options);
		});
	},


	successRedirect: function(){
		this.history.push("/");
	},

	handleImages: function(imageObjects){
		var images = [];

		for (var i = 0; i < imageObjects.length; i++) {
			var obj = {};
			obj["url"] = imageObjects[i].url
			images.push(obj);
		}
		if (this.state.photos.length === 0){
			this.currentPhoto = images[0];
		}
		var currentState = this.state.photos.concat(images)
		this.setState({
			photos: currentState,
			visible: ""
		})
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
								cName={cName}
								removeImage={this.removeImage}/>

		}.bind(this))
	},

	removeImage: function(url){
		var photos = this.state.photos;
		for (var i = 0; i < photos.length; i++) {
			if (photos[i].url === url){
				photos.splice(i, 1);
			}
		}
		this.setState({
			photos: photos,
			visible: "hidden"});
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
				selectedTags: photo.tags
			});
		}

		this.currentPhoto = photo;
	},


	saveInfo: function(){
		if (this.currentPhoto.url){
			this.currentPhoto["title"] = this.state.title;
			this.currentPhoto["description"] = this.state.description;
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

	renderSubmit: function(){
		var sub = "";
		if (this.state.photos.length > 0){
			sub = <input 
							type="submit"
							value="Upload Photos"
							className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"/>
		}

		return sub;
	},

	renderHeader: function(){
		if (this.state.photos.length === 0){
			return (<div id="select-header"><h3> Select Images </h3></div>)
		} else {
			return ""
		}
	},

	render: function() {
		return (
			<div className="form-container center">
				<div className="modal-form-styling center">

					<form onSubmit={this.handleSubmit} className="upload-form">
						{this.renderHeader()}
						<PhotoButton 
							handleUpload={this.handleImages} 
							photoCount={this.state.photos.length}/>


						<div className="uploaded-photo-view">
							{this.generateUploadedThumbnails()}
						</div>

						<div className={this.state.visible+ " fade-in"}>

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

								<div className="form-input-container">	
									<TagForm 
										formCallback={this.handleTags} 
										tags={this.state.selectedTags}/>
								</div>

						</div>

						<div className="submit-button-container">
							{this.renderSubmit()}
						</div>

					</form>
				</div>
			</div>

		);
	}
});
//want tags on tab/enter to add tag to selected tag list and clear state
module.exports = PhotoForm;