var React = require('react');
var Typist = require('react-typist');

var TypistForm = React.createClass({

	handleFinishedTyping: function(){
	},

	handleSubmit: function(e){
		e.preventDefault();
	},

	render: function() {
		return (
				<div className="form-container center noSelect">

					<div className="modal-header">
						Sign In
					</div>

					<div className="session-form">

						<Typist onTypingDone={this.handleFinishedTyping}>

						<div className="form-input-container">
							<span> sample@email.com </span>
							<input
								type="text"
								className="form-input">
							</input>
						</div>

						<div className="form-input-container">
							<span> ****** </span>
							<input
								type="password"
								className="form-input">
							</input>
						</div>

					</Typist>


						<div className="form-button-container">

							<div className="form-spacer">
								<input 
									value="Sign In"
									className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"/>
							</div>

							<div className="form-spacer">
								<i 
									className="mdl-button mdl-js-button mdl-button--colored">
										Sign Up
								</i>
							</div>

							<div className="form-spacer" id="guest-login-button">
								<i className="mdl-button mdl-js-button mdl-button--colored">
										guest login
								</i>
							</div>

						</div>

					</div>

				</div>
		);
	}
});

module.exports = TypistForm;