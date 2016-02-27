var React = require('react');
var NavBarSearch = require('./navbar_search');
var History = require('react-router').History;
var SessionUtil = require('../../util/sessions_util');

var NavBar = React.createClass({

  mixins: [History],

  handleClick: function(){

    if (this.props.current){
      SessionUtil.destroySession();
    } else {
      
      //have the component for signing in inside here, and just change the class! Boom modal!
      this.history.push("/user/sign_in");
    }

  },

  handleUpload: function(){
    this.history.push("/upload");
  },

  profileLink: function(){
    this.history.push("/users/"+this.state.currentUser.id);
  },

  render: function() {

    var text;
    var profile;
    if (this.props.current){
      text = "Log Out";
      profile = (
        <li className="header-li" onClick={this.profileLink}> <a>Profile</a> </li>
      );
    } else {
      text = "Sign In";
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

              {profile}

            </ul>
          </div>
        </header>
      </div>
    );

  }
});

module.exports = NavBar;



