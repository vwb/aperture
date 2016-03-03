var React = require('react');
var SuggestedItem = require('./suggested_item');

var SuggestedItemList = React.createClass({

	renderSuggestedItems: function(){
		var items = [];

		if (this.props.items.length > 0){
			var max = (this.props.items.length > 4) ? 4 : this.props.items.length

			for (var i = 0; i < max; i++) {
				items.push(<SuggestedItem 
											title={this.props.items[i].title} 
											selectCallBack={this.props.selectCallBack}
											key={i}/>)
			}
		}

		return items;
	},

	render: function() {
		return (
			<section className="suggested-item-container">
				{this.renderSuggestedItems()}
			</section>
		);
	}
});

module.exports = SuggestedItemList;