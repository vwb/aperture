var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var NavBarSearch = require('./navbar_search');
var SessionStore = require('../../stores/react_session_store');
var SessionUtil = require('../../util/sessions_util');
var History = require('react-router').History;

var NavBar = React.createClass({

  mixins: [History],

  getInitialState: function(){
    return {
      current_user: SessionStore.current_user()
    };
  },

  //can maybe do this in will mount?
  componentDidMount: function(){

    this.toke = SessionStore.addListener(this._onChange);

    if (!this.state.current_user){
      SessionUtil.fetchCurrent();
    };
  },

  _onChange: function(){
    this.setState({current_user: SessionStore.current_user()});
  },

  componentWillUnmount: function(){
    this.toke.remove();
  },

  handleClick: function(){

    if (this.state.current_user){
      SessionUtil.destroySession();
    } else {
      this.history.push("/user/sign_in");
    }

  },

  handleUpload: function(){
    this.history.push("/upload");
  },

  render: function() {

    var text;
    if (this.state.current_user){
      text = "Log Out"
    } else {
      text = "Sign In"
    }


    return (
      <div>
        <header className="navbar-header">
          <div className="header-inner">
            <div className="logo">
              <a href="#"><img src="../../assets/Aperture" alt="Aperture"/></a>
            </div>

            <div className="search-container">
              <NavBarSearch/>
            </div>

            <ul className="header-ul group">

              <li className="header-li">
                <i className="material-icons" onClick={this.handleUpload} >add_a_photo</i>
              </li>

              <li onClick={this.handleClick} className="header-li">
                <a >{text}</a>
              </li>

            </ul>
          </div>
        </header>
      </div>
    );

  }
});

module.exports = NavBar;



