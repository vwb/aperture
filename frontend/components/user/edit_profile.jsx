var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoButton = require('../photos/photo_upload_button');
var ApiUtil = require('../../util/api_util');
var ErrorIndex = require('../util/error_index');

var EditProfileForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		return {
			username: this.props.user.username,
			email: this.props.user.email,
			password: "",
			passwordConfirmation: "",
			avatar: this.props.user.avatar,
			errors: []
		}
	},

	handleImages: function(results){
		if (results && results[0]){

			var split = results[0].url.split("upload/");
			var modified_url = "c_lfill,h_250,w_250/"+split[1];
			split[1] = modified_url;
			split = split.join("upload/");

			this.setState({avatar: split})
		}
	},

	handleSubmit: function(e){
		
		e.preventDefault();
		var pwToSend;
		var errorList = [];

		if (this.state.password && this.state.passwordConfirmation){
			if (this.state.password !== this.state.passwordConfirmation){
				errorList.push("Passwords do not match.")
			} else {
				pwToSend = this.state.password
			}
		}

		if (this.state.username === ""){
			errorList.push("Username cannot be blank.")
		} 

		if (this.state.email === ""){
			errorList.push("Email cannot be blank.")
		}

		if (errorList.length > 0){
			this.setState({errors: errorList})
		} else {
			var params = {
				username: this.state.username,
				email: this.state.email,
				password: pwToSend,
				avatar: this.state.avatar
			}
			ApiUtil.updateUser(this.props.user.id, params, this.closeModal, this.errorHandler)
		}
	},

	errorHandler: function(data){
		this.setState({errors: data.error})
	},



	closeModal: function(){
		this.props.closeModal();
	},

	render: function() {
		return (
			<div className="modal-form-styling center edit-profile-form-container">
				<div className="modal-header">
					Edit Profile
				</div>

				<form onSubmit={this.handleSubmit} className="edit-profile-form">

						<div className="error-container">
							<ErrorIndex errors={this.state.errors}/>
						</div>

						<div className="photo-thumb center">
							<img src={this.props.user.avatar} />
						</div>

						<div className="form-input-container">
							<input
								type="text"
								valueLink={this.linkState("username")}
								className="form-input"
								placeholder={"Username: "+this.props.user.username}/>
						</div>

						<div className="form-input-container">
							<input
								type="text"
								valueLink={this.linkState("email")}
								className="form-input"
								placeholder={"Email: "+this.props.user.email}/>
						</div>

						<div className="form-input-container">

							<input
								type="password"
								valueLink={this.linkState("password")}
								className="form-input"
								placeholder="New Password"/>
						</div>

						<div className="form-input-container">
							<input
								type="password"
								valueLink={this.linkState("passwordConfirmation")}
								className="form-input"
								placeholder="Confirm Password"/>
						</div>

						<div className="form-input-container img-select">


							<PhotoButton 
								handleUpload={this.handleImages} 
								photoCount={1}/>

							<span> Update profile picture </span>

						</div>

						<input 
							type="submit" 
							value="Update"
							className="mdl-button mdl-js-button mdl-button--colored" />

				</form>		
			</div>
		);
	}
});

module.exports = EditProfileForm;