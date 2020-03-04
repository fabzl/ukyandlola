import styled from 'styled-components';
import theme from '../../styles/theme';

import BGUrl from '../../images/mainBG.jpg';

const CenteredTitle = styled.h2`
	text-align: center;
	color: ${theme.deepBlue};
	margin-bottom: 0.5rem;
	font-size: 2rem;
	align-items: center;
	display: flex;
	margin-left: auto;
	margin-right: auto;
`;

const CenteredP = styled.p`
	text-align: center;
	margin-top: 0.5rem;
	margin-bottom: 2rem;
	color: ${theme.deepBlue};
`;

const IconHolder = styled.img`
	width: 2rem;
	height: 2rem;
	margin: 0 auto;

	&.ticks {
		width: 1rem;
		height: 1rem;
	}
	&.optical {
		margin-right: 1rem;
		width: 4rem;
		height: 4rem;
	}
`;

const WarningHolder = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${theme.clearcolor};
	font-size: 0.8rem;
	padding: 0 2%;
	margin-top: 1rem;

	div {
		flex-direction: row;
		align-items: center;
		display: flex;
		max-width: 50%;
		p {
			padding-left: 0.5rem;
			text-align: left;
		}
	}
`;

const Headliner = styled.div`
	width: 80%;
	background-color: ${theme.red};
	margin-left: auto;
	margin-right: auto;
	height: 0.15rem;
	position: absolute;
	top: 1rem;
	display: flex;
	align-self: center;
	z-index: 2;
`;

const LockUpPlan = styled.div`
	transition: all 300ms ease-out;
	justify-content: center;
	display: flex;
	flex-direction: column;
	font-family: ${theme.fonttitle3};
	font-weight: 600;
	margin-left: auto;
	margin-right: auto;

	/* transform: scale(0.5);

	@media (min-width: 700px) {
		transform: scale(0.9);
	} */
	.priceText {
		width: 100%;
		font-size: 4.5vw;
		font-weight: 600;

		flex-direction: column;
		display: flex;
		line-height: 2.2rem;

		@media (min-width: 700px) {
			font-size: 2.5rem;
		}
	}
	.smallText {
		text-transform: uppercase;
		font-size: 2vw;
		flex-direction: column;
		display: flex;
		text-align: center;

		justify-content: space-around;
		@media (min-width: 700px) {
			font-size: 1.1rem;
		}
	}
`;

const Button = styled.a`
	text-decoration: none;
	max-height: 40px;
	transition: all 300ms ease-out;
	font-size: 0.8rem;
	letter-spacing: 0.04rem;
	font-family: ${theme.fonttitle};
	font-weight: 700;
	width: auto;
	display: block;
	max-width: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.clearcolor};
	background-color: ${theme.darkGray};
	border-radius: 2rem;
	padding: 1rem 2rem;

	@media (min-width: 800px) {
		margin-left: auto;
		margin-right: auto;
		margin-block-start: 1rem;
		margin-block-end: 1rem;
	}
	&:hover,
	&:active {
		color: ${theme.deepBlue};
		background-color: ${theme.grayLight};
	}
`;

const BuyButton = styled.a`
	text-decoration: none;
	max-height: 100px;
	transition: all 300ms ease-out 0.5s;
	font-size: 1.1rem;
	letter-spacing: 0.04rem;
	font-family: ${theme.fonttitle};
	font-weight: 700;
	width: auto;
	display: block;
	max-width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.black};
	background-color: ${theme.clearcolor};
	border-radius: 2rem;
	padding: 0.8rem 1.5rem;
	margin-block-start: 1rem;
	margin-block-end: 1rem;
	align-self: center;
	box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
	margin-bottom: 3rem;
	&:hover,
	&.active {
		/* color: ${theme.clearcolor}; */
		background-color: ${theme.grayLight};
		transform: scale(1.1);
		svg,
		img {
			fill: ${theme.grayLight};
		}
	}
`;

const PlanCard = styled.div`
	border: 1px solid ${theme.grayLight};
	box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
	width: 30%;
	max-width: 600px;
	text-align: center;
	min-height: 30vh;
	max-height: 500px;
	padding: 1rem 1rem 2rem 1rem;
	font-family: ${theme.fonttitle1};
	background-color: white;
	justify-content: space-between;
	display: flex;
	position: relative;
	flex-direction: column;

	@media (max-width: 500px) {
		max-height: 600px;
		padding: 1rem 0.2rem 2rem 0.2rem;

	}

	/* &:nth-child(1) {
		&:before {
			content: "SIMPLE";
			font-weight: 700;
			letter-spacing: 0.1rem;
			color: ${theme.red};
			font-size: 0.6rem;
			background-color: white;
			padding: 0.35rem 1rem;
			position: absolute;
			top: 1rem;
			display: flex;
			align-self: center;
			z-index: 3;
			transform: translateY(-0.5rem);
		}
	}

	&:nth-child(2) {
		&:before {
			content: "ÓPTIMO";
			font-weight: 700;
			letter-spacing: 0.1rem;
			color: ${theme.red};
			font-size: 0.6rem;
			background-color: white;
			padding: 0.35rem 1rem;
			position: absolute;
			top: 1rem;
			display: flex;
			align-self: center;
			z-index: 3;
			transform: translateY(-0.5rem);
		}
	}
	&:nth-child(3) {
		&:before {
			content: "FULL";
			font-weight: 700;
			letter-spacing: 0.1rem;
			color: ${theme.red};
			font-size: 0.6rem;
			background-color: white;
			padding: 0.35rem 1rem;
			position: absolute;
			top: 1rem;
			display: flex;
			align-self: center;
			z-index: 3;
			transform: translateY(-0.5rem);
		}
	} */
	transition: all .5s;
	cursor: pointer;
	&.active {
		transform: scale(1.25);
		z-index: 4;
	}
	h3 {
		margin-top: 2.5rem;
		@media (max-width: 500px) {
			margin-top: 1rem;
			margin-bottom: .5rem;
		}
		@media (min-width: 1000px) {
			font-size: 2rem;
			margin-top: 3.5rem;
		}
	}

	p {

		@media (max-width: 500px) {
			font-size: 0.5rem;
		}

	}
`;

const PlanHolder = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	background-color: ${theme.white};
	/* min-height: 50vh; */
`;

const LogoContainer = styled.div`
	width: 30vw;
	height: auto;
	min-width: 10rem;
`;

const Container = styled.section`
	position: relative;
	overflow: hidden;
	max-width: ${theme.overWidth};
	background-color: white;
	display: flex;
	background-size: cover;
	justify-content: flex-end;
	padding-top: 1.5rem;
	background-position: bottom;
	background-repeat: repeat-x;
	background-image: ${'url(' + BGUrl + ')'};
	background-size: 100% 30%;
	margin-left: auto;
	margin-right: auto;
`;

const Content = styled.div`
	display: flex;
	position: relative;
	width: 100%;
`;

const TextHolder = styled.div`
	height: 100%;
	max-width: 100%;
	background-color: ${theme.white};
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	margin-left: auto;
	margin-right: auto;
	color: ${theme.complementary};
`;

const Table = styled.div`
	width: 100%;
	text-align: center;
	font-family: ${theme.fonttitle2};
	font-style: italic;
	font-weight: 700;
	justify-items: center;
	flex-direction: column;
	font-size: 0.8rem;
	padding: 0 5%;
	@media (max-width: 800px) {
		padding: 2%;
	}
	h2 {
		border: 1px solid green;
	}

	h4 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0;
		border-right: 1px solid ${theme.red};
		text-align: center;
		padding: 3rem auto;
		@media (max-width: 800px) {
			border-right: none;
			padding: 0.5rem auto;
		}

		&.desktop-plan-title {
			@media (max-width: 800px) {
				display: none;
			}
		}

		&.mobile-plan-title {
			@media (min-width: 800px) {
				/* display: none; */
				border-right: none;
			}
		}
	}

	.row {
		text-align: center;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		min-height: 3rem;
		@media (max-width: 800px) {
			min-height: 0.5rem;
		}

		.mob {
			display: none;
			@media (max-width: 800px) {
				display: block;
				.mob-table {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.mob-cel {
					h5 {
						display: flex;
						align-items: center;
					}
				}
			}
		}

		.cel {
			border-top: 1px solid ${theme.red};
			padding: 1rem;
			font-weight: 600;
			display: flex;
			flex-direction: column;
			justify-content: center;
			border-right: 1px solid ${theme.red};
			@media (max-width: 800px) {
				border-right: none;
				padding: 0.5rem;
			}
		}
		.desk-cel {
		}
		@media (max-width: 800px) {
			grid-template-columns: 1fr;
			.desk-cel {
				display: none;
			}
		}
	}
`;

export {
	Container,
	Content,
	TextHolder,
	LogoContainer,
	PlanHolder,
	PlanCard,
	Table,
	LockUpPlan,
	Button,
	BuyButton,
	WarningHolder,
	Headliner,
	IconHolder,
	CenteredTitle,
	CenteredP
};
