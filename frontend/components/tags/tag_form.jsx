var React = require('react');
var TagItems = require('../tags/tag_items');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var TagStore = require('../../stores/tag_store');
var TagActions = require('../../actions/tag_actions');

var TagForm = React.createClass({

	mixins: [LinkedStateMixin],

	getInitialState: function(){
		return {
			tag: "",
			selectedTags: [],
			existingTags: TagStore.allTags()
		}
	},

	componentDidMount: function(){
		this.toke = TagStore.addListener(this._onChange)

		if (this.state.existingTags.length === 0){
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
			var newTags = this.state.selectedTags.concat(this.state.tag);
			this.setState({
				selectedTags: newTags,
				tag: ""
			})
			this.props.formCallback(newTags);
		}
	},

	render: function() {


		return (
			<div className="tag-input">
					<label>
						Tags
						<input
							type="text"
							valueLink={this.linkState("tag")}
							onKeyDown={this.handleTab}/>
					</label>


					<TagItems tags={this.state.selectedTags}/>
			</div>
		);
	}
});

module.exports = TagForm;