import React from 'react';
import { Container, Content, TextHolder } from './style.css';
import Typist from 'react-typist';

class PhotoBgText extends React.Component {
	constructor(props) {
		super(props);
		this.clickScroll = this.clickScroll.bind(this);
	}
	clickScroll() {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: window.innerHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	render() {
		return (
			<Container>
				<Content>
					<Typist element="">
						<TextHolder>{this.props.text}</TextHolder>
					</Typist>
				</Content>
			</Container>
		);
	}
}

export default PhotoBgText;
