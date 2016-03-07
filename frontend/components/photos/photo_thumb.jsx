var React = require('react');

var PhotoThumb = React.createClass({

	clickHandler: function(e){
		this.props.updateForm(e.currentTarget.src, this.props.ind);
	},

	renderCancel: function(){

		if (this.props.removeImage){
			return (<span 
								className="cancel-img" 
								onClick={this.removeImage}> 
									<i className="material-icons">not_interested</i> 
							</span>)

		} else {
			return "";
		}
	},

	removeImage: function(){
		this.props.removeImage(this.props.photo.url)
	},

	render: function() {
		return (
			<span className={this.props.cName+ " photo-thumb"} >
				{this.renderCancel()}
				<img onClick={this.clickHandler} src={this.props.photo.url} />
			</span>
		);
	}
});

module.exports = PhotoThumb;