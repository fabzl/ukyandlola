import React from 'react';
import { Container, Content, SVGholder } from './PhotoBGSvg.css';

class PhotoBGSvg extends React.Component {
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
			<Container style={{ backgroundImage: 'url(' + this.props.propsBgImage + ')' }}>
				<Content>
					<SVGholder>
						<img src={this.props.imageUrl} alt="SVG logo" />
					</SVGholder>
				</Content>
			</Container>
		);
	}
}

export default PhotoBGSvg;
