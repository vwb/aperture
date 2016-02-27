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

	componentDidMount: function(){
		console.log("I mounted!");
	},

	render: function() {

		return (
			<div className="PhotoForm">
				<button onClick={this.upload}> Select Photos </button>
			</div>
		);

	}
});

module.exports = PhotoButton;