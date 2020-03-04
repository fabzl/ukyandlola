import React from 'react';
import Slider from 'react-slick';
import SlideItem01 from '../../images/fotos_gerencia_01.jpg';
import SlideItem02 from '../../images/fotos_gerencia_02.jpg';
import SlideItem03 from '../../images/fotos_gerencia_03.jpg';
import SlideItem04 from '../../images/fotos_gerencia_04.jpg';
import SlideItem05 from '../../images/fotos_gerencia_05.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
	Container,
	ContentSlider,
	CenteredTitle,
	AvatarPic,
	TestimonialCard,
	TextHolder,
	AvatarPicHolder
} from './Testimonials.css';

class Testimonials extends React.Component {
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
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnDotsHover: true,
			// dotsClass: 'botonTestimonials',
			rows: 1,
			arrows: false,
			autoplay: false,
			cssEase: 'linear'
		};
		return (
			<Container>
				<CenteredTitle>Periodismo de excelencia.</CenteredTitle>
				<ContentSlider>
					<Slider {...settings}>
						<TestimonialCard>
							<AvatarPicHolder>
								<AvatarPic src={SlideItem01} />
							</AvatarPicHolder>
							<TextHolder>
								<p>
									El proyecto de suscripción digital de La Tercera conectará los temas que nuestra
									audiencia quiere con la rigurosidad del periodismo. El oficio, por mucho que hoy sea
									más instantáneo, no se hace en vivo y en directo. Requiere de una pausa para
									procesar la información y comprobarla. Esa rigurosidad, que en tiempos de posverdad
									corre el riesgo de trizarse, obliga a chequear: es la esencia del oficio, el método,
									la base sobre la que se construye el resto.
								</p>
								<h4>José Luis Santa María O.</h4>
								<h5>Director de La Tercera</h5>
							</TextHolder>
						</TestimonialCard>
						<TestimonialCard>
							<AvatarPicHolder>
								<AvatarPic src={SlideItem02} />
							</AvatarPicHolder>
							<TextHolder>
								<p>
									Una democracia, sin un periodismo sólido y saludable, no existe. Nuestro compromiso
									es ese: informar y explicar —con veracidad, honestidad intelectual y audacia— de lo
									que pasa y de aquello que algunos no quieren que se sepa.
								</p>
								<h4>Gloria Faúndez H.</h4>
								<h5>Editora General de La Tercera</h5>
							</TextHolder>
						</TestimonialCard>
						<TestimonialCard>
							<AvatarPicHolder>
								<AvatarPic src={SlideItem03} />
							</AvatarPicHolder>
							<TextHolder>
								<p>
									Nunca la información había sido más relevante y demandada. Y por eso nunca ha habido
									tanto periodismo de calidad disponible. Por eso, cuando se habla de la crisis del
									periodismo, no es una crisis de calidad ni de relevancia. Es una crisis del negocio
									tradicional, esto es, el papel, pero no de la necesidad de contar con buena
									información.
								</p>
								<h4>Andrés Benítez P.</h4>
								<h5>Gerente General del Grupo Copesa</h5>
							</TextHolder>
						</TestimonialCard>
						<TestimonialCard>
							<AvatarPicHolder>
								<AvatarPic src={SlideItem04} />
							</AvatarPicHolder>
							<TextHolder>
								<p>
									La clave de la suscripción digital de La Tercera es conocer mejor a nuestra
									audiencia y poder hacer un buen periodismo para mantenerla informada. Siempre,
									poniendo las noticias en su contexto, en la historia que explica su importancia.
									Vale la pena recordar que no existe periodismo sin un contexto. Y eso es parte de
									nosotros.
								</p>
								<h4>María José O’Shea</h4>
								<h5>Jefa de Redacción de La Tercera</h5>
							</TextHolder>
						</TestimonialCard>
						<TestimonialCard>
							<AvatarPicHolder>
								<AvatarPic src={SlideItem05} />
							</AvatarPicHolder>
							<TextHolder>
								<p>
									Si uno repasa la historia democrática de este país, la agenda de los últimos 25
									años, no se entiende sin algunas de las portadas de La Tercera. Lo que buscamos es
									seguir liderando las conversaciones, solo que ahora desde distintas plataformas y
									formatos, y de la mano de nuestros usuarios.
								</p>
								<h4>Alejandro Trujillo B.</h4>
								<h5>Director de Audiencias y Plataformas</h5>
							</TextHolder>
						</TestimonialCard>
					</Slider>
				</ContentSlider>
			</Container>
		);
	}
}

export default Testimonials;
