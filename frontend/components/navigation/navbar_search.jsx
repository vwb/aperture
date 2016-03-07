var React = require('react');
var TagActions = require('../../actions/tag_actions');
var TagStore = require('../../stores/tag_store');
var SuggestedItemList = require('./suggested_item_list');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;


var NavBarSearch = React.createClass({

	mixins: [History],

	getInitialState: function(){
		var query;

		if (this.props.query){
			query = this.props.query
		} else {
			query = ""
		}

		return {
			query: query,
			filteredTags: [],
			focused: false
		};
	},

	componentDidMount: function(){
		TagActions.fetchAllTags();
		if (this.state.query){
			this.setState({query: this.state.query})
			this._findMatching(this.state.query)
		} else {
			this.setState({query: ""})
		}
	},

	componentDidUpdate: function(){
		this.searchTags();
	},

	componentWillReceiveProps: function(newProps){
		if (newProps.query){
			this.setState({query: newProps.query})
		} else {
			this.setState({query: ""})
		}

		this._findMatching(newProps.query);
	},

	tagSuccessCallback: function(){
		this.searchTags();
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
			e.preventDefault();
			if (this.state.filteredTags.length > 0) {
				this._findMatching(this.state.filteredTags[0])
			}
		}
	},

	handleSubmit: function(e){
		e.preventDefault();
		debugger;
		this.history.push({path: "/", state: {query: this.state.query}})
	},

	searchTags: function(){

		if (this.state.filteredTags.length === 1){
			var params = {tag: this.state.filteredTags[0]}
			ApiUtil.fetchRelevantPhotos(params);
			// this.history.push("/")
		} else if (this.state.query === ""){
			ApiUtil.fetchAllPhotos();
			// this.history.push('/')
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