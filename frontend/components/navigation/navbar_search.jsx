var React = require('react');
var TagActions = require('../../actions/tag_actions');
var TagStore = require('../../stores/tag_store');
var SuggestedItemList = require('./suggested_item_list');
var ApiUtil = require('../../util/api_util');


var NavBarSearch = React.createClass({


	//if page is rendered based on a search query, return it!

	getInitialState: function(){
		return {
			query: "",
			filteredTags: [],
			focused: false
		};
	},

	componentDidMount: function(){
		TagActions.fetchAllTags();
	},

	handleInput: function(e){
		var query = e.currentTarget.value
		this._findMatching(query)
	},

	_findMatching: function(query){
		var matchingTags = [];

		if (query){
		 matchingTags = TagStore.findSubSet(query)
		} else {
			matchingTags = [];
		}

		this.setState({query: query, filteredTags: matchingTags})
	},

	handleItemSelection: function(e){
		this._findMatching(e.currentTarget.innerText);
		this.refs.searchInput.focus();
	},

	handleKey: function(e){
		if (e.which === 9){

			if (this.state.filteredTags.length > 0) {

				e.preventDefault();
				this.setState({query: this.state.filteredTags[0].title})

			}
		}
	},

	handleSubmit: function(e){
		e.preventDefault();

		if (this.state.filteredTags.length === 1){
			var params = {tag: this.state.filteredTags[0]}
			ApiUtil.fetchRelevantPhotos(params);
			
			//APP_TODO: redirect to the main page
		} else if (this.state.query === ""){
			ApiUtil.fetchAllPhotos();
			//APP_TODO: redirect to the main page
		} else {
			//raise error
		}
	},

	render: function() {
		return (
		  <form className="search-form" onSubmit={this.handleSubmit}>

		    <div className="search-input-container">
		      <input 
		      	className="search-input"
		      	ref="searchInput"
		      	type="text" 
		      	id="query"
		      	placeholder="Search..."
		      	onChange={this.handleInput}
		      	value={this.state.query}
		      	autoComplete="off"
		      	onKeyDown={this.handleKey}
		      	/>

		      
			      <SuggestedItemList 
			      	items={this.state.filteredTags} 
			      	selectCallBack={this.handleItemSelection}/>

		    </div>

		  </form>

		);
	}
});


module.exports = NavBarSearch;