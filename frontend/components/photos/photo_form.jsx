var React = require('react');
var PhotoButton = require('./photo_upload_button');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoThumb = require('./photo_thumb');
var ApiUtil = require('../../util/api_util');



var PhotoForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		this.currentPhoto = {};

		return {
			title: "",
			description: "",
			price: "",
			photos: [],
			highLighted: 0
		}

	},

	handleSubmit: function(){
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
		debugger;
		this.props.history.push("/");
	},

	componentDidMount: function(){
		console.log("I mounted");
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

		this.setState({highLighted: ind})

		var photo = this._findPhoto(url);

		if (this.currentPhoto.url !== photo.url){
			this.saveInfo();
			this.setState({title: photo.title, description: photo.description, price: photo.price});
		}

		this.currentPhoto = photo;

		console.log(this.state.photos);
	},


	saveInfo: function(){
		if (this.currentPhoto.url){
			this.currentPhoto["title"] = this.state.title;
			this.currentPhoto["description"] = this.state.description;
			this.currentPhoto["price"] = this.state.price;
		}
	},

	_findPhoto: function(url){
		for (var i = 0; i < this.state.photos.length; i++) {
			if (this.state.photos[i].url === url){
				return this.state.photos[i];
			}
		}
	},

	render: function() {
		//refactor this form into components? this file is getting huge.
		return (
			<div className="photo-form">
				<form onSubmit={this.handleSubmit}>
					<h3> Upload Photos </h3>

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
					</label>

					<PhotoButton handleUpload={this.handleImages}/>

					<div className="uploaded-photo-view">
						{this.generateUploadedThumbnails()}
					</div>

					<input
						type="submit"
						value="Upload Photos"/>

				</form>
			</div>

		);
	}
});

module.exports = PhotoForm;