import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';

// Set an initial global state directly:
setGlobal({
	language: 'eng',
	time: 0
});

class Store extends React.Component {
	constructor(props) {
		super(props);
	}

	// render() {
	// 	return <div />;
	// }
}

export default Store;
