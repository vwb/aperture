var React = require('react');
var ApiUtil = require('../util/api_util');

var PhotoForm = React.createClass({

	upload: function(e){
		e.preventDefault();
		cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
			if (!error){
				ApiUtil.createPhoto(results[0]);
			}
		});
		
	},

	componentDidMount: function(){
		console.log("I mounted!");
	},

	render: function() {

		return (
			<div className="PhotoForm">
				<button onClick={this.upload}> Upload </button>
			</div>
		);

	}
});

module.exports = PhotoForm;