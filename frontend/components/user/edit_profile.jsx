var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var PhotoButton = require('../photos/photo_upload_button');

var EditProfileForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		return {
			username: "",
			email: "",
			title: "",
			password: "",
			avatar: ""
		}
	},

	handleImages: function(){
		debugger;
	},

	handleSubmit: function(){
		debugger;
	},

	closeModal: function(){
		debugger;
	},

	render: function() {
		return (
			<div className="modal-form-stying center">
				<form onSubmit={this.handleSubmit} className="edit-profile-form">

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
								valueLink={this.linkState("password")}
								className="form-input"
								placeholder="Confirm Password"/>
						</div>

						<div className="form-input-container">

							<span> Update profile picture </span>

							<PhotoButton 
								handleUpload={this.handleImages} 
								photoCount={1}/>

							<div className="photo-thumb">
								<img src={this.props.user.avatar} />
							</div>

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