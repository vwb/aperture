var React = require('react');
var NavBarSearch = require('./navbar_search');
var History = require('react-router').History;
var SessionUtil = require('../../util/sessions_util');
var ApiUtil = require('../../util/api_util');
var ModalActions = require('../../actions/modal_actions');

var NavBar = React.createClass({

  mixins: [History],

  componentDidMount: function(){
    window.addEventListener('scroll', this.handleScroll);
    this.determineVisible(this.props)
  },

  componentWillReceiveProps: function(newProps){
    this.determineVisible(newProps);
  },

  componentWillUnmount: function(){
    window.removeEventListener('scroll', this.handleScroll)
  },

  handleClick: function(e){

    if (this.props.current){
      SessionUtil.destroySession();
      this.history.push({
        pathname: "/"
      })
    } else {
      ModalActions.showModal("sign_in")
    }
  },

  handleScroll: function(e){

    if ($(window).scrollTop() > 70){
      this.refs.navbar.className = "navbar-wrapper navbar-header hide"
    }

    if ($(window).scrollTop() <= 70){
      this.refs.navbar.className = "navbar-wrapper navbar-header"
    }
  },

  handleUpload: function(){
    ModalActions.showModal("upload");
  },

  profileLink: function(){
    this.history.push("/users/"+this.props.current.id);
  },

  renderIndex: function(e){
    e.preventDefault();
    this.history.push({path: "/", state: {val: "_clearSearch"}});
  },

  determineVisible: function(props){
    if (props.pathname.indexOf("users") > -1 || props.pathname.indexOf("collections") > -1){
      this.refs.navbar.className = "navbar-wrapper navbar-header hide"
    } else {
      this.refs.navbar.className = "navbar-wrapper navbar-header"
    }
  },

  render: function() {
    var text;
    var profile;
    var upload;

    if (this.props.current){
      text = (<li onClick={this.handleClick} className="header-li hvr-underline-from-left" id="sign-in">
               <i className="material-icons">power_settings_new</i>
               <span className="link-info"> log out </span> 
             </li>);
      profile = (
        <li className="header-li hvr-underline-from-left" onClick={this.profileLink}> 
          <i className="material-icons">account_circle</i>
          <span className="link-info"> profile </span> 
         </li> );
      upload = (
        <li className="header-li hvr-underline-from-left">
          <i className="material-icons" onClick={this.handleUpload}>add_a_photo</i>
          <span className="link-info"> upload </span> 
        </li>
        );
    } else {
      text = (
        <li onClick={this.handleClick} className="header-li hvr-underline-from-left" id="sign-in">
          <i className="material-icons">person_add</i>
          <span className="link-info"> sign in </span> 
        </li>
      );
      profile = "";
    }

    return (


      <div>
        <header ref="navbar" className="navbar-wrapper navbar-header">
          <div className="header-inner">
            <div className="logo">
              <a href="#" onClick={this.renderIndex}><img src="../../assets/Aperture" alt="Aperture"/></a>
            </div>

            <div className="search-container">
              <NavBarSearch query={this.props.query}/>
            </div>

            <ul className="header-ul group">

              {upload}

              {text}

              {profile}

            </ul>
          </div>
        </header>
      </div>
    );

  }
});

module.exports = NavBar;



