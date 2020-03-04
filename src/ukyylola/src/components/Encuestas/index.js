import React from 'react';
import { Container, Content, TextHolder, Button } from './Encuestas.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import styled from 'styled-components';
//import theme from '../../styles/theme';

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class Encuestas extends React.Component {
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
					<Fade bottom>
						<TextHolder>
							<h4>Queremos conocerte mejor.</h4>
							<p>Ayúdanos a ver tus intereses respondiendo esta breve encuesta.</p>

							<Flip bottom>
								<Button
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.surveygizmo.com/s3/4973113/Suscripcion-Digital-23-04"
								>
									Comencemos
								</Button>
							</Flip>
						</TextHolder>
					</Fade>
				</Content>
			</Container>
		);
	}
}

export default Encuestas;
