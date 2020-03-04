import React, { Fragment } from 'react';
import {
	Container,
	Content,
	TextHolder,
	PlanCard,
	PlanHolder,
	Table,
	LockUpPlan,
	Button,
	BuyButton,
	WarningHolder,
	Headliner,
	IconHolder,
	CenteredTitle,
	CenteredP
} from './Planes.css';
import axios from 'axios';
import InfoIcon from '../../images/info.svg';
import PrivacyIcon from '../../images/privacy.svg';
import CarritoIcon from '../../images/carrito.svg';
import OpticalIcon from '../../images/optical.svg';

import SiIcon from '../../images/si.svg';
import NoIcon from '../../images/no.svg';

import fallbackJson from '../../helpers/fallbackJsonPaywall.json';

class Planes extends React.Component {
	constructor(props) {
		super(props);
		this.clickScroll = this.clickScroll.bind(this);
		this.state = {
			loading: true,
			loadingError: false,
			data: {},
			atributos: [],
			fichas: [],
			selectedPlan: 1,
			selectedURL: '',
			userSelectedPLan: '',
			redirectSite: '&redirectto=https://especiales.latercera.com/suscripcion/bienvenida'
		};
	}

	componentDidMount() {
		this.getInfo();
	}

	getInfo() {
		axios
			.get('https://suscripciondigital.latercera.com/json-paywall/LA_TERCERA_DIGITAL')
			.then((response) => {
				this.processInfo(response);
				this.setState({
					loading: false,
					loadingError: false
				});
			})
			.catch((error) => {
				// console.log('error de Json:', error);
				this.processInfoFallsback(fallbackJson);

				this.setState({
					loading: false,
					loadingError: false
				});
			});
	}

	selectPlan(index) {
		if (this.state.userSelectedPLan === 'active') {
			this.setState({
				userSelectedPLan: ''
			});

			setTimeout(() => {
				this.setState({
					selectedPlan: index.index,
					userSelectedPLan: 'active'
				});
			}, 500);
		} else {
			this.setState({
				selectedPlan: index.index,
				userSelectedPLan: 'active'
			});
		}
		this.getURL(index.index);
	}

	getURL(index) {
		let URL = this.state.fichas[index].url;
		this.setState({
			selectedURL: URL
		});
	}

	processInfoFallsback(response) {
		this.setState({
			data: response,
			fichas: response.fichas,
			atributos: response.fichas[0].atributos
		});

		this.getURL(this.state.selectedPlan);
	}

	processInfo(response) {
		this.setState({
			data: response.data,
			fichas: response.data.fichas,
			atributos: response.data.fichas[0].atributos
		});

		this.getURL(this.state.selectedPlan);
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
	cleanHtml(str) {
		return str.replace(/(<([^>]+)>)/gi, '')
	}
	render() {
		const { loading, loadingError, atributos, fichas } = this.state;
		const cleanHtml = this.cleanHtml
		return (
			<Container>
				<Content>
					<TextHolder>
						<CenteredTitle>
							<IconHolder className="optical" src={OpticalIcon} />¿Qué incluye tu plan?
						</CenteredTitle>
						<CenteredP>Prueba el primer mes gratis en todos los planes.</CenteredP>
						{!loading &&
							(!loadingError && (
								<Table>
									<div className="row">
										<h4>&nbsp;</h4>
										{fichas.map((ficha, index) => {
											return (
												<h4 className="desktop-plan-title" key={index}>
													{cleanHtml(ficha.nombre)}
												</h4>
											);
										})}
									</div>
									{atributos.map((atributo, index) => {
										return (
											<div className="row" key={index}>
												{fichas.map((ficha, subindex) => {
													return (
														<Fragment key={subindex}>
															{subindex === 0 && (
																<div className="cel" key={index}>
																	<h4 className="mobile-plan-title">
																		{ficha.atributos[index].valor.indexOf(
																			'Beneficios Club'
																		) === -1 ? (
																			atributo.valor
																		) : (
																			'Membresías adicionales del Club La Tercera'
																			// atributo.valor
																			// 	.toString()
																			// 	.replace (' + 1 adicional', '')
																		)}
																	</h4>
																	<div className="mob">
																		<div className="mob-table">
																			{fichas.map((ficha, subindex) => {
																				// console.log(ficha)
																				const srcIcon = ficha.atributos[index].bullet === 1 ? SiIcon : NoIcon
																				return (
																					<div key={subindex} className="mob-cel">
																						<h5>
																							{cleanHtml(ficha.nombre)}
																							{ficha.atributos[index].valor.indexOf(
																								'Beneficios Club'
																							) === -1 ? (
																							<>
																								&nbsp;
																								<IconHolder
																									className="ticks"
																									src={srcIcon}
																								/>
																							</>
																							) : (
																									<span className="mob-number">: &nbsp;
																									<strong>
																										{
																											ficha.atributos[index].valor.replace(
																												/[^\d.-]/g,
																												''
																											)
																										}
																									</strong>
																								</span>

																							)}
																						</h5>
																					</div>
																				)
																			})}
																		</div>
																	</div>
																</div>
															)}
															{ficha.atributos[index].bullet === 1 && (
																<div className="cel desk-cel">
																	{ficha.atributos[index].valor.indexOf(
																		'Beneficios Club'
																	) === -1 ? (
																		<IconHolder className="ticks" src={SiIcon} />
																	) : (
																		<>
																		<span>+
																		{
																		ficha.atributos[index].valor.replace(
																			/[^\d.-]/g,
																			''
																		)}
																		</span>
																		</>
																	)}
																</div>
															)}
															{ficha.atributos[index].bullet !== 1 && (
																<div className="cel desk-cel">
																	<IconHolder className="ticks" src={NoIcon} />
																</div>
															)}
														</Fragment>
													);
												})}
											</div>
										);
									})}
								</Table>
							))}

						{!loading &&
							(!loadingError && (
								<PlanHolder>
									{fichas.map((ficha, index) => {
										return (
											<PlanCard
												className={index === this.state.selectedPlan ? 'active' : ''}
												key={index}
												onClick={() => this.selectPlan({ index })}
											>
												<Headliner />

												<h3>{cleanHtml(ficha.nombre)}</h3>

												<LockUpPlan>
												
			
														<div className="priceText">
															${Number(ficha.precio_oferta / 12)
																.toFixed(0)
																.toString()
																.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
														</div>
														<div className="smallText last">/mensuales</div>
													
												</LockUpPlan>
												<p>{ficha.texto_publicitario}</p>
												<Button
													href={
														this.state.selectedURL +
														this.state.redirectSite +
														this.state.redirectSite
													}
													className={this.state.userSelectedPLan}
													target="_blank"
													rel="noopener noreferrer"
												>
													Suscríbete
												</Button>
											</PlanCard>
										);
									})}
								</PlanHolder>
							))}

						<WarningHolder>
							<div>
								<IconHolder src={PrivacyIcon} />
								<p>
									Tus datos no serán usados con fines<br /> comerciales ni entregados a terceros.
								</p>
							</div>
							<div>
								<IconHolder src={InfoIcon} />
								<p>
									Recuerda que puedes cancelar tu plan <br />en cualquier momento y con total
									facilidad.
								</p>
							</div>
						</WarningHolder>

						<BuyButton
							href={this.state.selectedURL + this.state.redirectSite}
							className={this.state.userSelectedPLan}
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconHolder src={CarritoIcon} />Suscríbete
						</BuyButton>
					</TextHolder>
				</Content>
			</Container>
		);
	}
}

export default Planes;
