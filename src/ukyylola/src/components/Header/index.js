import React from 'react';
// import { Link } from 'gatsby';
import { Container } from './Header.css';
import ChangLang from '../ChangLang';
import Nav from './Nav';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.clickScroll = this.clickScroll.bind(this);
		this.state = {
			openMenu: false,
			displayBar: false,
			displaySuscribe: true
		};
	}

	clickScroll() {
		if (typeof window !== 'undefined') {
			console.log('click');
			window.scrollTo({
				top: document.body.scrollHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	componentDidMount = () => {
		// window.addEventListener('scroll', this.this.displayHeader);
		if (this.props.hideOffer) {
			this.setState({ displaySuscribe: false });
		}
		setTimeout(this.displayHeader(), 3000);
	};

	// componentWillUnmount = () => {
	// 	window.removeEventListener('scroll', this.this.displayHeader);
	// };

	displayHeader = () => {
		this.setState({
			displayBar: true
		});
	};

	render() {
		return (
			<Container className={this.state.displayBar === true ? 'visible' : ''}>
				<Nav />
				<ChangLang />
			</Container>
		);
	}
}
export default Header;
