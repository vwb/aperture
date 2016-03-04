var React = require('react');
var PhotoForm = require('../photos/photo_form');
var SignInForm = require('../sessions/create_session_form');
var SignUpForm = require('../sessions/create_user_form');
var ModalStyles = require('../../constants/modal_styles');
var EditProfileForm = require('../user/edit_profile');
var Modal = require('boron/OutlineModal');


var ModalWrapper = React.createClass({

	getInitialState: function(){
		return {
			modalBody: "",
			modalAppliedStyle: ""
		}
	},

	showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  renderModal: function(path){
  	var modalElements = this._selectModalBody(path)
  	this.setState({
  		modalBody: modalElements.body,
  		modalAppliedStyle: modalElements.style
  	})
  	this.showModal();
  },

	componentDidMount: function(){
		var action = this.props.action
		this.renderModal(action)
	},

	componentWillReceiveProps: function(newProps){
		var action = newProps.action
		this.renderModal(action);
	},

	_selectModalBody: function(action){
		var modalElements = {};



		if (action === "upload"){
      modalElements["body"] = (<PhotoForm closeModal={this.hideModal}/>)
      modalElements["style"] = ModalStyles.uploadForm

		} else if (action === "sign_in"){
			modalElements["body"] = (<SignInForm closeModal={this.hideModal}/>);
			modalElements["style"] = ModalStyles.signIn

		} else if (action === "sign_up"){
			modalElements["body"] = (<SignUpForm closeModal={this.hideModal}/>);
			modalElements["style"] = ModalStyles.signUp
		
		} else if (action === "edit_profile"){
			debugger;
			modalElements["body"] = (<EditProfileForm user={this.props.user} closeModal={this.hideModal}/>);
			modalElements["style"] = ModalStyles.uploadForm
		}


		return modalElements;
	},

	render: function() {
		return (

			<div className="ModalWrapper">
			  <Modal 
          ref="modal"
          modalStyle={this.state.modalAppliedStyle.modalStyle}
          contentStyle={this.state.modalAppliedStyle.contentStyle}
          className="noSelect">

          <div className="modal-close-button-container">
            <button 
              className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
              onClick={this.hideModal}>
              <i className="material-icons">clear</i>
            </button>
          </div>

          {this.state.modalBody}

        </Modal>
			</div>
		);
	}
});


module.exports = ModalWrapper;