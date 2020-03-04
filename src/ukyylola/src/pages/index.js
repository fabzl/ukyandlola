import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PhotoBgText from '../components/PhotoBGText';
import PhotoBgSvg from '../components/PhotoBgSvg';

import ImageBg from '../images/bg-patagonia.jpg';
import ImageLogoEng from '../images/logo_uky-portrait_eng.svg';
// import ImageLogoEsp from '../images/logo_uky-portrait_esp.svg';

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
					text="Cuando se inició el proceso de colonización en Tierra del Fuego hacia 1881, habitaban en el territorio fueguino Los Selknam, que por más de 10.000 años recorrieron las pampas y bosques fueguinos y quienes debido a la acción colonizadora en unos pocos decenios fueron condenados a desaparecer."
					propsBgImage=""
				/>

				<PhotoBgText
					text="Cuando se inició el proceso de colonización en Tierra del Fuego hacia 1881, habitaban en el territorio fueguino Los Selknam, que por más de 10.000 años recorrieron las pampas y bosques fueguinos y quienes debido a la acción colonizadora en unos pocos decenios fueron condenados a desaparecer."
					propsBgImage=""
				/>
				<PhotoBgText
					text="Uky, the impetuous, youthful son of a Selk’nam family, must save his people with the help of Lola, a Shaman apprentice. Together they must face the evil sheep farmers that are trying to enslave their people. Uky & Lola must work together and learn how to leave all material things behind. Only then are they able to channel the magic of the spirits, reestablish the balance in the Karukinka, and solve the eternal dispute between the Sun and the Moon."
					propsBgImage=""
				/>
			</Layout>
		);
	}
}

export default IndexPage;

// The Selk'nam or Onas were an Amerindian tribe of nomads and hunters who lived on the island of “Tierra del Fuego” at the southern end of the American continent in Chile and Argentina.

// For more that 7,000 years,  they practiced a unique way of living, free of material possessions in complete sync with nature.

// At the beginning of the 20th century, they were brutally murdered by settlers coming to the island.

// This movie honors their memory and brings back to life the magic of their traditions.
