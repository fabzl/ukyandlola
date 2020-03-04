import React from 'react';
import { Container, Content } from './styles.css';
// import ImageBg from '../../images/bg-patagonia.jpg';
import Slideshow from '../Slidez';
// import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';

class MultiSlideshow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Content>
					<Slideshow
						showIndex
						// showArrows
						autoplay
						enableKeyboard
						useDotIndex
						slideInterval={6000}
						defaultIndex={10}
						slides={this.props.slides}
						effect={'fade'}
						height={'100%'}
						width={'100vw'}
					/>
				</Content>
			</Container>
		);
	}
}

export default MultiSlideshow;
