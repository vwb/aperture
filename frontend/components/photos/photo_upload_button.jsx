var React = require('react');
var ApiUtil = require('../../util/api_util');
var RaisedButton = require('material-ui/lib/app-bar');

var PhotoButton = React.createClass({

	upload: function(e){
		e.preventDefault();

		var self = this;
		cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
			if (!error){
				self.props.handleUpload(results);
			}
		});
		
	},

	renderButton: function(){
		if (this.props.photocount === 0){
			return ("Select Images")
		}
	},

	componentDidMount: function(){
		console.log("I mounted!");
	},

	render: function() {

		return (
			<div className="PhotoForm">
				<button 
					className="mdl-button mdl-js-button mdl-button--fab mdl-button--accent"
					onClick={this.upload}>

  				<i className="material-icons">add_a_photo</i>

				</button>
				<p>{this.renderButton()}</p>
			</div>
		);

	}
});

module.exports = PhotoButton;