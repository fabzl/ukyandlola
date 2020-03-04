// import React from 'react';

import React, { setGlobal } from 'reactn';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
// import Animatic from '../components/Animatic';
import { graphql } from 'gatsby';

import Typist from 'react-typist';
import ReactHtmlParser from 'react-html-parser';

import styled from 'styled-components';

// Initial global state
setGlobal({
	data: null,
	gdoc: null,
	characters: null,
	lang: 'esp',
	totalScene: 0,
	currentScene: 0,
	currentTime: 0
});

class Script extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	state = {
		isPlaying: true,
		totalTime: 100,
		currentTime: 0,
		characters: [ "XOO'M", 'UKY', 'LOLA' ]
		// lang: 'esp'
	};

	processScriptString = (script) => {
		// str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');
		// split(/\r\n|\r|\n/g);
		let scriptblocks = script.replace(/(?:\r\n|\r|\n)/g, '<p>');
		scriptblocks = ReactHtmlParser(scriptblocks);
		// console.log(scriptblocks, this.state.characters);

		return scriptblocks;
	};

	changeLanguage = () => {
		if (this.global.lang === 'esp') {
			this.setGlobal({ lang: 'eng' });
		} else {
			this.setGlobal({ lang: 'esp' });
		}
	};
	changeToNextScene = () => {
		// console.log('next', this.state.currentScene < this.state.totalScene, this.state.currentScene);
		if (this.global.currentScene < this.global.totalScene - 1) {
			this.setGlobal({ currentScene: this.global.currentScene + 1 });
		} else {
			this.setGlobal({ currentScene: this.global.totalScene });
		}
	};

	changeToPreviousScene = () => {
		// console.log('prev', this.state.currentScene > 0);

		if (this.global.currentScene > 0) {
			this.setGlobal({ currentScene: this.global.currentScene - 1 });
		} else {
			this.setGlobal({ currentScene: 0 });
		}
	};

	startTimer = () => {
		let myTimer;
		console.log('startTimer');
		myTimer = setInterval(this.tic, 1000);
	};

	stopTimer = () => {
		console.log('stopTimer');
	};

	pauseTimer = () => {
		console.log('pauseTimer');
	};

	tic = () => {
		this.setGlobal({ currentTime: this.global.currentTime + 1 });
	};

	determineTotalLength = () => {
		this.setGlobal({
			totalScene: this.props.data.allGoogleSpreadsheetUkyMasterHistoriaEscaletaGeneral.edges.length - 1
		});
	};

	transformNumberInTime = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
	};

	componentDidMount = () => {
		this.determineTotalLength();
		this.startTimer();

		// this.setGlobal(
		// 	fetch('index.html').then((response) => response.text()).then((html) => ({
		// 		data: html
		// 	}))
		// );

		this.setGlobal({ gdoc: this.props.data.allGoogleSpreadsheetUkyMasterHistoriaEscaletaGeneral.edges });

		// console.log('gdoc', this.global.gdoc);
	};

	// incrementX = () => {
	// 	this.setGlobal((state) => ({
	// 		x: state.x + 1
	// 	}));
	// };

	render() {
		const cells = this.props.data.allGoogleSpreadsheetUkyMasterHistoriaEscaletaGeneral.edges;
		return (
			<Layout>
				<Seo
					title="Uky y Lola - En tierra del Fuego -  dynanimatic"
					keywords={[ `Uky & Lola`, `Land of Fire`, `3d animation`, `digital` ]}
				/>
				<ClockPanel>{this.transformNumberInTime(this.global.currentTime)}</ClockPanel>

				<Movie>
					{cells.map((cellData, index) => {
						const cell = cellData.node;

						if (this.global.currentScene === index) {
							return (
								<Escena key={index}>
									<ControlPanel>
										{this.state.lang === 'eng' ? <p>{cell.sceneName} </p> : ''}
										<p>
											{this.global.currentScene + 1 + '.- '}
											{cell.nombreEscena}
											{/* {cell.seconds} - */}
											{/* {cell.plotMark} */}
										</p>
									</ControlPanel>

									<Button className="next" onClick={this.changeToNextScene}>
										{this.global.lang === 'eng' ? 'next' : 'siguiente'}
									</Button>
									<Button className="prev" onClick={this.changeToPreviousScene}>
										{this.global.lang === 'eng' ? 'previous' : 'volver'}
									</Button>
									<Typist avgTypingDelay="0" stdTypingDelay="0">
										<MainText>
											{this.global.lang === 'eng' ? (
												<Location>
													{cell.numeroDeEscena}.{cell.locaciones}
												</Location>
											) : (
												<Location>
													{cell.numeroDeEscena}.{cell.location}
												</Location>
											)}

											{this.global.lang === 'eng' ? (
												<TextScript>{this.processScriptString(cell.englishVersion)}</TextScript>
											) : (
												''
											)}
											{this.global.lang === 'esp' ? (
												<TextScript>{this.processScriptString(cell.versionEspanol)}</TextScript>
											) : (
												''
											)}
										</MainText>
									</Typist>
								</Escena>
							);
						}
					})}
				</Movie>
			</Layout>
		);
	}
}

export const pageQuery = graphql`
	query {
		allGoogleSpreadsheetUkyMasterHistoriaEscaletaGeneral {
			edges {
				node {
					numeroDeEscena
					sceneName
					nombreEscena
					location
					locaciones
					englishVersion
					versionEspanol
					seconds
					capitulo
					plotMark
				}
			}
		}
		allGoogleSpreadsheetUkyMasterHistoriaPersonajes {
			edges {
				node {
					nombre
					edad
					descripcionGeneral
					cualidadesFisicas
					altura
					sexo
					peso
					raza
					ojos
					piel
					cabello
					vestimenta
					equipos
					rolSocial
					moral
					conflicto
					nivelDeAmbicion
					valores
					cualidades
					habilidades
					defectos
					conductaAntisocial
					temperamento
					necesidadDramatica
					puntoDeVista
					arcoDeTransformacion
					actitud
				}
			}
		}
	}
`;

export default Script;

const TextScript = styled.p`
	&.char {
		font-weight: 800;
	}
	&.dialogue {
		text-align: center;
	}
`;

const Button = styled.div`
	border: 1px solid black;
	color: black;
	padding: 2rem 1rem;
	font-size: 0.6rem;
	font-family: 'Courier New', Courier, monospace;
	cursor: pointer;
	max-width: 90px;
	text-align: center;
	position: absolute;
	top: 5rem;
	z-index: 20;
	&.language {
	}
	&.next {
		right: 0.5rem;
		border: none;
		z-index: 3;
		text-align: right;
	}
	&.prev {
		left: 0.5rem;
		border: none;
		z-index: 3;
	}
`;

const Escena = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: white;
	text-align: center;
	/* position: absolute; */
`;

const Movie = styled.div`
	height: auto;
	background-color: white;
	overflow-y: auto;
`;

const ClockPanel = styled.div`
	position: absolute;
	width: 20vw;
	top: 2.5rem;
	right: 1.5rem;
	font-family: 'Courier New', Courier, monospace;
	color: black;
	/* border: 1px solid black; */
	text-align: right;
	/* padding: 0.4rem; */
	font-size: 0.7rem;
`;

const ControlPanel = styled.div`
	transform: rotate(-90deg);
	/* transform-origin: left top 0; */
	position: absolute;
	top: 0;
	left: 0;
	width: 100vh;
	height: auto;
	bottom: 0;
	/* border: 1px solid black; */
	font-size: 0.7rem;
	color: black;
	font-family: 'Courier New', Courier, monospace;
	text-align: right;
	padding-right: 10rem;
`;

const MainText = styled.div`
	/* position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
	color: black;
	font-family: 'Courier New', Courier, monospace;
	text-align: left;
	max-width: 80vw;
	padding-top: 5vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
`;

const Location = styled.p`
	text-align: left;
	text-transform: uppercase;
	display: inline;
`;
