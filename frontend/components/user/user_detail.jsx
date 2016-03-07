var React = require('react');
var UserStore = require('../../stores/user_store');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var UserDetail = React.createClass({

	mixins: [History],

	getInitialState: function(){

		return {
			user: UserStore.user()
		};
	},

	componentDidMount: function(){
		this.toke = UserStore.addListener(this._onChange);
		ApiUtil.fetchUser(this.props.userId);
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	_onChange: function(){
		this.setState({user: UserStore.user()})
	},

	_userPresent: function(){
		if (Object.keys(this.state.user).length > 0){
			return true
		} else {
			return false
		}
	},

	renderURL: function(){
		if (this._userPresent()){
			return this.state.user.avatar
		} else {
			return ""
		}
	},

	renderName: function(){
		if (this._userPresent()){
			return this.state.user.username
		} else {
			return ""
		}
	},

	handleClick: function(){
		this.history.push("users/"+this.state.user.id);
	},

	render: function() {
		return (
			<div className="user-detail">
				<section className="img-container">
					<img onClick={this.handleClick} src={this.renderURL()}/>
				</section>
				<section onClick={this.handleClick} className="user-info">
					{this.renderName()}
				</section>
			</div>
		);
	}
});

module.exports = UserDetail;