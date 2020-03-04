import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PhotoBgText from '../components/PhotoBGText';
import PhotoBgSvg from '../components/PhotoBgSvg';
import ImageBg from '../images/bg-patagonia.jpg';
import ImageLogoEng from '../images/logo_uky-portrait_eng.svg';
// import ImageLogoEsp from '../images/logo_uky-portrait_esp.svg';
import MultiSlideshow from '../components/MultiSlideshow';

// check slideshow example & docs here .
// https://pau1fitz.github.io/react-slidez/
// https://www.npmjs.com/package/react-slidez

class Characters extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// Slideshow = require('react-slidez');

		return (
			<Layout>
				<Seo
					title="Uky y Lola - En tierra del Fuego"
					keywords={[ `Uky & Lola`, `Land of Fire`, `3d animation`, `digital` ]}
				/>
				{/* 
				<PhotoBgSvg imageUrl={ImageLogoEng} propsBgImage={ImageBg} />
				<PhotoBgText
					text="Uky, the impetuous, youthful son of a Selk’nam family, must save his people with the help of Lola, a Shaman apprentice. Together they must face the evil sheep farmers that are trying to enslave their people. Uky & Lola must work together and learn how to leave all material things behind. Only then are they able to channel the magic of the spirits, reestablish the balance in the Karukinka, and solve the eternal dispute between the Sun and the Moon."
					propsBgImage=""
				/> */}
				{/* <MultiSlideshow /> */}
			</Layout>
		);
	}
}

export default Characters;

// showIndex
// showArrows
// autoplay
// enableKeyboard
// useDotIndex
// slideInterval={6000}
// defaultIndex={10}
// slides={[ ImageBg, ImageBg, ImageBg ]}
// effect={'top'}
// height={'100%'}
// width={'100vw'}
