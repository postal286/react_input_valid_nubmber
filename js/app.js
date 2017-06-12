var Input = React.createClass({
	getInitialState: function () {
		return ({
			value: ''
		});
	},

	componentDidMount: function () {
		ReactDOM.findDOMNode(this.refs.firstInput).focus();
	},

	onInputChange: function (e) {
		this.setState({
			value: e.target.value
		});
	},

	filterInputValue: function () {

		var	currentInputValue = this.state.value,
				regExpPat = /\d/g,
				newInputValueArray = currentInputValue.match(regExpPat),
				newInputValue = newInputValueArray.join('');

		this.setState({
			value: newInputValue
		});
	},

	render: function () {
		return (
			<div>
				<p className='input-title'>First method (RegExp)</p>
				<input placeholder='Type something...'
							 onBlur={this.filterInputValue}
							 value={this.state.value}
							 onChange={this.onInputChange}
							 className='valid-input'
							 ref='firstInput'
				/>
			</div>
		);
	}
});

var Input2 = React.createClass({
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
		});
	},

	render: function () {
		return (
			<div>
				<p className='input-title'>Second method (Filter)</p>
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

var Inputs = React.createClass({
	render: function () {
		return (
			<div>
				<Input />
				<Input2 />
			</div>
		);
	}
});

ReactDOM.render(
	<Inputs />,
	document.getElementById('root')
);