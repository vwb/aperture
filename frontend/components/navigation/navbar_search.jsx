var React = require('react');

var NavBarSearch = React.createClass({

	getInitialState: function(){
		return {
			query: ""
		};
	},


	render: function() {
		return (
		  <form className="search-form">

		    <div className="search-input-container">
		      <input 
		      	className="search-input"
		      	type="text" 
		      	value="" 
		      	id="query"
		      	placeholder="Search..."
		      	/>
		    </div>

		  </form>

		);
	}
});


module.exports = NavBarSearch;