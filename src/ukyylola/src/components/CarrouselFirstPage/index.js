import React from 'react';
import Slider from 'react-slick';

import SlideItem01 from '../../images/comunidades/la-tercera.jpg';
import SlideItem02 from '../../images/comunidades/tercera-pm.jpg';
import SlideItem03 from '../../images/comunidades/lt-pulso.jpg';
import SlideItem04 from '../../images/comunidades/pulso-trader.jpg';
import SlideItem05 from '../../images/comunidades/culto.jpg';
import SlideItem06 from '../../images/comunidades/paula.jpg';
import SlideItem07 from '../../images/comunidades/que-pasa.jpg';
import SlideItem08 from '../../images/comunidades/cronica-estereo.jpg';
import SlideItem09 from '../../images/comunidades/mas-deco.jpg';
import SlideItem10 from '../../images/comunidades/el-deportivo.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, ContentSlider, CenteredTitle, CenteredP, SlickImage, TextoOver } from './CarrouselFirstPage.css';

class CarrouselFirstPage extends React.Component {
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

	showContent() {
		console.log('cossssonloee!!');
	}

	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnDotsHover: true,
			centerMode: true,
			rows: 1,
			draggable: true,
			arrows: true,
			autoplay: true,
			cssEase: 'linear',

			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<Container>
				<CenteredTitle>{this.props.titulo}</CenteredTitle>
				<CenteredP>{this.props.bajada}</CenteredP>
				<ContentSlider>
					<Slider {...settings}>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem01} alt="slideItem01" />
							</a>
							<TextoOver>
								<div className="caja-texto">
									<p>Noticias y actualidad de Chile y el mundo.</p>
								</div>
							</TextoOver>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem02} alt="slideItem02" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Edición especial —de lunes a viernes— con golpes noticiosos, análisis y
											comentarios a los temas que marcan la jornada.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem03} alt="slideItem03" />

								<TextoOver>
									<div className="caja-texto">
										<p>El brazo de negocios de La Tercera, enfocado en empresas y mercados.</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem04} alt="slideItem04" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Sitio digital especializado en economía y finanzas, encargado de monitorear
											los mercados de manera permanente, para entregar a nuestros lectores la
											mejor información y análisis de las alternativas de inversión, y entender
											cómo los hechos noticiosos afectan las perspectivas de los agentes del
											mercado.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem05} alt="slideItem05" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Entretención y cultura, con lo más destacado en series, música, literatura y
											cine.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem06} alt="slideItem06" />

								<TextoOver>
									<div className="caja-texto">
										<p>La voz de la mujer de hoy.</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem07} alt="slideItem07" />

								<TextoOver>
									<div className="caja-texto">
										<p>Preguntas que mueven al mundo. Ciencia, medio ambiente y sociedad.</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem08} alt="slideItem08" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Cada historia tiene un sonido. El nuevo podcast de La Tercera que profundiza
											y pone en contexto las historias detrás de las noticias a través de la
											narración sonora.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem09} alt="slideItem09" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Diseño, estilo de vida y los mejores datos para ambientar tu propio espacio.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
						<SlickImage>
							<a onClick={() => this.showContent()}>
								<img src={SlideItem10} alt="slideItem10" />

								<TextoOver>
									<div className="caja-texto">
										<p>
											Toda la actualidad sobre Deportes en Chile y el mundo, con noticias y
											profundidad.
										</p>
									</div>
								</TextoOver>
							</a>
						</SlickImage>
					</Slider>
				</ContentSlider>
			</Container>
		);
	}
}

export default CarrouselFirstPage;
