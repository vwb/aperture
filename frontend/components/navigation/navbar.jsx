var React = require('react');
var NavBarSearch = require('./navbar_search');
var History = require('react-router').History;
var SessionUtil = require('../../util/sessions_util');
var ApiUtil = require('../../util/api_util');
var ModalActions = require('../../actions/modal_actions');

var NavBar = React.createClass({

  mixins: [History],

  getInitialState: function(){
    var query = ""
    if (this.props.query){
      query = this.props.query
    }

    return {
      query: query
    }
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.query){
      this.setState({query: newProps.query})
    }
  },

  handleClick: function(e){

    if (this.props.current){
      SessionUtil.destroySession();
      this.history.push({
        pathname: "/"
      })
    } else {
      ModalActions.showModal("sign_in")
      // this.history.push({
      //   pathname: this.props.pathname,
      //   state: {modal: true, returnTo: this.props.pathname, action: "sign_in"}
      // });
    }
  },

  handleUpload: function(){
    ModalActions.showModal("upload");

    // this.history.push({
    //   pathname: this.props.pathname,
    //   state: {modal: true, returnTo: this.props.pathname, action: "upload"}
    // });
  },

  profileLink: function(){
    this.history.push("/users/"+this.props.current.id);
  },

  renderIndex: function(e){
    e.preventDefault();
    this.history.push("/");
    this.setState({query: ""})
  },

  render: function() {
    var text;
    var profile;
    var upload;
    if (this.props.current){
      text = <i className="material-icons">power_settings_new</i>;
      profile = (
        <li className="header-li hvr-underline-from-left" onClick={this.profileLink}> <i className="material-icons">account_circle</i> </li> );
      upload = (<i className="material-icons" onClick={this.handleUpload}>add_a_photo</i>);
    } else {
      text = <i className="material-icons">person_add</i>;
      profile = "";
    }

    return (

      <div className="navbar-wrapper">
        <header className="navbar-header">
          <div className="header-inner">
            <div className="logo">
              <a href="#" onClick={this.renderIndex}><img src="../../assets/Aperture" alt="Aperture"/></a>
            </div>

            <div className="search-container">
              <NavBarSearch query={this.state.query}/>
            </div>

            <ul className="header-ul group">

              <li className="header-li hvr-underline-from-left">
                {upload}
              </li>

              <li onClick={this.handleClick} className="header-li hvr-underline-from-left" id="sign-in">
                {text}
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



