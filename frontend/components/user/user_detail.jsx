var React = require('react');
var UserStore = require('../../stores/user_store');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var UserDetail = React.createClass({

	mixins: [History],

	handleClick: function(){
		this.history.push("users/"+this.props.user.id);
	},

	render: function() {
		return (
			<div className="user-detail">
				<section className="img-container">
					<img onClick={this.handleClick} src={this.props.user.avatar}/>
				</section>
				<section onClick={this.handleClick} className="user-info">
					{this.props.user.username}
				</section>
			</div>
		);
	}
});

module.exports = UserDetail;