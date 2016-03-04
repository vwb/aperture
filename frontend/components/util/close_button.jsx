var React = require('react');

var CloseButton = React.createClass({
	render: function() {
		return (
			<div className="modal-close-button-container">
        <button 
          className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
          onClick={this.props.action}>
          <i className="material-icons">clear</i>
        </button>
      </div>
		);
	}
});

module.exports = CloseButton;