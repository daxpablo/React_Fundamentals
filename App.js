import React from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
// 	render() {
// 		return React.createElement('h1', null, 'Hello Guys')
// 	}
// }

// const App =  () => <h1>Hello Worldsss</h1>

class App extends React.Component {
	render() {
		let txt = this.props.txt
		return <h1>{txt}: {this.props.cat}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default text'
}

ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
);

export default App