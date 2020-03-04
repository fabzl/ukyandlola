import React, { useState } from 'react';
import NewsletterItem from './Item';

import { StNewsletterWrap, StNewsletterItems, StNewsletterHeader, StNewsletterSubHeader } from './style.css';

const newsletters = [
	{
		name: 'La Tercera',
		slug: 'la-tercera',
		logo: 'Latercera',
		title: 'Lo que tienes que saber.',
		frequency: 'De lunes a domingo',
		description:
			'Las noticias más destacadas y los mejores artículos para informarse y entender lo que está pasando en Chile y el mundo.',
		img: 'news-la-tercera.jpg',
		main: true
	},
	{
		name: 'La Tercera PM',
		slug: 'la-tercera-am',
		logo: 'LaterceraPm',
		frequency: 'De lunes a viernes',
		description:
			'Pasado el mediodía, una nueva mirada a los temas que marcan la jornada, con la urgencia de las nuevas tecnologías.',
		img: 'news-la-tercera-pm.jpg'
	},
	{
		name: 'Pulso AM',
		slug: 'pulso-am',
		logo: 'LtPulsoWhite',
		frequency: 'De lunes a domingo',
		description: 'Infórmate primero sobre empresas y mercados alrededor del mundo.',
		img: 'news-pulso-am.jpg'
	},
	{
		name: 'Pulso Trader',
		slug: 'pulso-trader',
		logo: 'LtPulsoTrader',
		frequency: 'De lunes a viernes',
		description: 'Información y análisis actualizados para alternativas de inversión.',
		img: 'news-pulso-trader.jpg'
	},
	{
		name: 'Selección de Culto',
		slug: 'culto',
		logo: 'CultoWhite',
		frequency: 'Semanal',
		description:
			'Una guía de cultura pop: los mejores artículos para entender sobre series, música, libros y cine.',
		img: 'news-seleccion-de-culto.jpg'
	},
	{
		name: 'Paula',
		slug: 'paula-la-voz-de-la-mujer',
		logo: 'PaulaWhite',
		title: 'La voz de la mujer',
		frequency: 'Semanal',
		description:
			'Reportajes e historias de la actualidad y secciones que abordan temas como amor, maternidad, espacios de trabajo y medio ambiente escritas por y para lectoras.',
		img: 'news-paula-la-voz-de-la-mujer.jpg'
	},
	{
		name: 'Paula Gourmet',
		slug: 'paula-gourmet',
		logo: 'PaulaWhite',
		title: 'Gourmet',
		frequency: 'Semanal',
		description: 'Las mejores recetas dulces y saladas, y datos gastronómicos que no puedes dejar de probar.',
		img: 'news-paula-gourmet.jpg'
	},
	{
		name: 'Elevando la discusión',
		slug: 'latercera-elevando-la-discusion',
		logo: 'LaterceraWhite',
		frequency: 'Semanal',
		description:
			'Los temas que generan debate en Chile y el mundo, y los insumos para entender cada una de las posturas contrapuestas.',
		img: 'news-elevando-la-discusion.jpg'
	},
	{
		name: 'Tech Delivery',
		slug: 'mouse-tech-delivery',
		logo: 'Mouse',
		frequency: 'Semanal',
		description: 'Actualiza tu semana con Mouse.',
		img: 'news-tech-delivery.jpg'
	},
	{
		name: 'Mouse Fina Selección',
		slug: 'mouse-fina-seleccion',
		logo: 'Mouse',
		frequency: 'De vez en mes',
		description: 'A reír de buena gana con las historias de Internet.',
		img: 'news-fina-seleccion.jpg'
	},
	{
		name: 'Guía de Finde',
		slug: 'finde-guia',
		logo: 'LtFindeWhite',
		frequency: 'Semanal',
		description: 'Dónde comer, beber y salir.',
		img: 'news-guia-de-finde.jpg'
	},
	{
		name: 'Más Deco',
		slug: 'masdeco',
		logo: 'MasdecoWhite',
		frequency: 'Semanal',
		description: 'Diseño, estilo de vida y datos.',
		img: 'news-mas-deco.jpg'
	}
];

const Newsletter = ({ noHeader }) => {
	const [ registered, updateRegistered ] = useState(false);
	const [ subscribes, updateSubscribes ] = useState(null);

	const handleRegisterNotification = (status) => {
		if (registered !== status) {
			console.log('registered in Newsletter?', status);
			updateRegistered(status);
		}
	};

	const handleSubscribes = (subscribedNewsletters) => {
		console.log(subscribedNewsletters);
		updateSubscribes(subscribedNewsletters);
	};

	return (
		<StNewsletterWrap className={noHeader ? 'inserted' : 'normal'}>
			{!noHeader && (
				<StNewsletterHeader>
					<h2>Newsletters.</h2>
					<hr />
					<p>
						Regístrate gratis y recibe los contenidos de La Tercera y sus medios en tu correo electrónico.
					</p>
				</StNewsletterHeader>
			)}

			{noHeader && (
				<StNewsletterSubHeader>
					<h2>Newsletters.</h2>
					<hr />
					<p>
						Regístrate gratis y recibe los contenidos de La Tercera y sus medios en tu correo electrónico.
					</p>
				</StNewsletterSubHeader>
			)}
			<StNewsletterItems className={noHeader ? 'inserted' : 'normal'}>
				{newsletters.map((news) => {
					return (
						<NewsletterItem
							{...news}
							key={news.slug}
							callbackNotifier={handleRegisterNotification}
							callbackNewsletters={handleSubscribes}
							registered={registered}
							subscribes={subscribes}
						/>
					);
				})}
			</StNewsletterItems>
		</StNewsletterWrap>
	);
};

export default Newsletter;
