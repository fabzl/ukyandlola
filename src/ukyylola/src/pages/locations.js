import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PhotoBgText from '../components/PhotoBGText';
import PhotoBgSvg from '../components/PhotoBgSvg';
import ImageBg from '../images/bg-patagonia.jpg';
import ImageLogoEng from '../images/logo_uky-portrait_eng.svg';
// import ImageLogoEsp from '../images/logo_uky-portrait_esp.svg';
import Image1 from '../images/biomas/Slide02.jpg';
import Image2 from '../images/biomas/Slide03.jpg';
import Image3 from '../images/biomas/Slide04.jpg';
import Image4 from '../images/biomas/Slide05.jpg';
import Image5 from '../images/biomas/Slide06.jpg';
import Image6 from '../images/biomas/Slide07.jpg';
import Image7 from '../images/biomas/Slide08.jpg';
import Image8 from '../images/biomas/Slide09.jpg';

import MultiSlideshow from '../components/MultiSlideshow';

class Locations extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
				<Seo
					title="Uky y Lola - En tierra del Fuego"
					keywords={[ `Uky & Lola`, `Land of Fire`, `3d animation`, `digital` ]}
				/>
				{/* <PhotoBgSvg imageUrl={ImageLogoEng} propsBgImage={ImageBg} />
				<PhotoBgText text="Locations" propsBgImage="" /> */}
				<MultiSlideshow slides={[ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8 ]} />
			</Layout>
		);
	}
}

export default Locations;
