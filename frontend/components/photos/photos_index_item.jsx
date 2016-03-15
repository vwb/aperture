var React = require('react');
var History = require('react-router').History;
var UserStore = require('../../stores/user_store');
var UserActions = require('../../actions/user_actions');

var PhotoIndexItem = React.createClass({

	mixins: [History],

	handleClick: function(e){

		if (e.currentTarget.className === "index-detail-item"){
			this.history.push("users/"+this.props.photo.user.id);
			e.stopPropagation();
		} else {
			var ids = this.grabIds();
			this.history.pushState({photos: ids}, "photos/"+this.props.photo.id);
			e.stopPropagation();
		}
	},

	grabIds: function(){
		var result = [];
		for (var i = 0; i < this.props.photos.length; i++) {
			result.push(this.props.photos[i].id)
		}
		return result
	},

	indexCheck: function(){
		if (this.props.index){
			return (
				<section className="index-detail-item" onClick={this.handleClick}>
					<span className="index-img-container"> <img src={this.props.photo.user.avatar} /> </span>
					<span className="index-user-info"> {this.props.photo.user.username} </span>
					<span className="index-photo-title"> {this.props.photo.title} </span>
				</section>
			)
		} else {
			return ""
		}
	},

	generateURL: function(){

		var url = this.props.photo.url
		var modified = url.split("upload/");
		modified[1] = "q_30/" + modified[1]
		url = modified.join("upload/")

		return url

	},

	render: function() {
		return (
			<div className={this.props.cName+"  fade-in photo-index-item"}>
				<img onClick={this.handleClick} src={this.generateURL()}/>
				{this.indexCheck()}
			</div>
		);
	}
	
});

module.exports = PhotoIndexItem;