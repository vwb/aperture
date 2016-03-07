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
			this.history.push("photos/"+this.props.photo.id);
			e.stopPropagation();
		}
	},

	indexCheck: function(){
		if (this.props.index){
			return (
				<section className="index-detail-item" onClick={this.handleClick}>
					<span className="index-img-container"> <img src={this.props.photo.user.avatar} /> </span>
					<span className="index-user-info"> {this.props.photo.user.username} </span>
				</section>
			)
		} else {
			return ""
		}
	},

	render: function() {
		return (
			<div className={this.props.cName+"  fade-in photo-index-item"}>
				<img onClick={this.handleClick} src={this.props.photo.url}/>
				{this.indexCheck()}
			</div>
		);
	}
	
});

module.exports = PhotoIndexItem;