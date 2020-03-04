import React from 'reactn';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PhotoBgText from '../components/PhotoBGText';
import PhotoBgSvg from '../components/PhotoBgSvg';

import ImageBg from '../images/bg-patagonia.jpg';
import ImageLogoEng from '../images/logo_uky-portrait_eng.svg';
// import ImageLogoEsp from '../images/logo_uky-portrait_esp.svg';

import ReactHtmlParser from 'react-html-parser';

class IndexPage extends React.Component {
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
				<PhotoBgSvg imageUrl={ImageLogoEng} propsBgImage={ImageBg} />
				<PhotoBgText
					text={ReactHtmlParser(
						'Título: Uky y Lola, en Tierra del Fuego≤br> Duración: 90 min≤br>Género: Fantasía≤br>Técnica: Animación 3D≤br>Software: Unreal Engine≤br>'
					)}
					propsBgImage=""
				/>
			</Layout>
		);
	}
}

export default IndexPage;
