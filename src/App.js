import React from 'react';
import './App.css';

// function App() {
// 	return <div className='App'></div>;
// }

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Praharsh',
			surname: 'Tembhurne',
		};
		this.state = {
			count: 0,
		};

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState((prev) => {
			return {
				count: prev.count + 1,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>App</h1>

				{this.state.name}
				{this.state.surname}
				<h2>{this.state.count}</h2>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default App;
