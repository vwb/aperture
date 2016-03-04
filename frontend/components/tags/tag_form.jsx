var React = require('react');
var TagItems = require('../tags/tag_items');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var TagActions = require('../../actions/tag_actions');
var TagStore = require('../../stores/tag_store');
var SuggestedItemList = require('../navigation/suggested_item_list');

var TagForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		return {
			tag: "",
			selectedTags: [],
			filteredTags: []
		}
	},

	componentDidMount: function(){
		this.toke = TagStore.addListener(this._onChange)

		if (this.state.filteredTags.length === 0){
			TagActions.fetchAllTags();
		}
	},

	componentWillUnmount: function(){
		this.toke.remove();
	},

	componentWillReceiveProps: function(newProps){
		if (newProps.tags){
			this.setState({selectedTags: newProps.tags});
		}
	},

	_onChange: function(){
		this.setState({existingTags: TagStore.allTags()});
	},

	handleTab: function(e){
		if (e.which === 9){
			e.preventDefault();
			var newTags;

			if (this.state.filteredTags.length > 0){
				if (this.state.selectedTags.indexOf(this.state.filteredTags[0]) === -1){
					newTags = this.state.selectedTags.concat(this.state.filteredTags[0]);
				}
			} else {
				if (this.state.selectedTags.indexOf(this.state.tag) === -1){
					newTags = this.state.selectedTags.concat(this.state.tag);
				}
			}

			if (!newTags) {newTags = this.state.selectedTags}

			this.setState({
				selectedTags: newTags,
				tag: "",
				filteredTags: ""
			})

			this.props.formCallback(newTags);
		}
	},

	_findMatching: function(tag){
		var matchingTags = [];

		if (tag){
		 matchingTags = TagStore.findSubSet(tag)
		} else {
			matchingTags = [];
		}
		this.setState({tag: tag, filteredTags: matchingTags})
	},

	handleItemSelection: function(e){
		var newTags = this.state.selectedTags.concat(e.currentTarget.innerText);
		this.setState({
			selectedTags: newTags,
			tag: "",
			filteredTags: []
		});
	},

	handleInput: function(e){
		var query = e.currentTarget.value
		this._findMatching(query)
	},

	render: function() {

		return (
			<div className="tag-input">
						<input
							type="text"
							className="form-input"
							value={this.state.tag}
							onInput={this.handleInput}
							onKeyDown={this.handleTab}
							placeholder="Tags (tab to apply)"/>

						<SuggestedItemList 
			      	items={this.state.filteredTags} 
			      	selectCallBack={this.handleItemSelection}/>

					<TagItems tags={this.state.selectedTags}/>
			</div>
		);
	}
});

module.exports = TagForm;