var Input = React.createClass({
	getInitialState: function () {
		return ({
			value: ''
		});
	},

	onInputChange: function (e) {
		this.setState({
			value: e.target.value
		});
	},

	filterInputValue: function () {

		var	i = 0,
				newInputValue,
				newInputValueArray,
				currentInputValue = this.state.value,
				filteredValueArray = currentInputValue.split('');

		newInputValueArray = filteredValueArray.filter(function(number) {
			number = +number;
			if (number != NaN) return number;
		});

		newInputValue = newInputValueArray.join('');

		this.setState({
			value: newInputValue
		})
	},

	render: function () {
		return (
			<div>
				<input placeholder='Type something...'
							 onBlur={this.filterInputValue}
							 value={this.state.value}
							 onChange={this.onInputChange}
							 className='valid-input'
				/>
			</div>
		);
	}
});

ReactDOM.render(
	<Input />,
	document.getElementById('root')
);