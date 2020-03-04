import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	padding: 1rem 1.3rem;
	z-index: 100;
	top: 0;

	.col {
		z-index: 3;
	}

	.col2 {
		display: flex;
		align-items: center;
		.btn-suscribete {
			margin-right: 1rem;
		}
	}

	a {
		text-decoration: none;
		color: white;
		transition: color 0.3s ease;
	}

	a:hover {
		color: tomato;
	}

	#menuToggle {
		display: block;
		position: relative;
		z-index: 2;
		/* margin-top: 4px; */
		-webkit-user-select: none;
		user-select: none;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -6px;
		left: -5px;

		cursor: pointer;

		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */

		-webkit-touch-callout: none;
	}

	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: #cdcdcd;
		border-radius: 1px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
		margin-bottom: 0;
	}

	/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: #cdcdcd;
	}

	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	/*
 * Make this absolute positioned
 * at the top left of the screen
 	/* background: {'url(' + BGQuote + ')'}; */

	#menu {
		position: fixed;
		right: 0;
		top: 0;
		padding-top: 10vh;
		width: 100vw;
		height: 100vh;

		background-size: cover;
		background: ${theme.almostBlack};
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */
		display: flex;
		flex-direction: column;
		justify-content: center;
		transform-origin: 0% 0%;
		transform: translate(100%, 0);
		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
	}

	/*
 * And let's slide it in from the left
 */
	#menuToggle input:checked ~ ul {
		transform: none;
	}
	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		z-index: -1;
	}
	a {
		color: ${theme.clearcolor};
		transition: color 0.2s ease;
		text-decoration: none;
		&:hover {
			color: inherit;
		}
	}
	.slotSponsorLogo {
		display: flex;
		align-items: center;
	}
	.slotSponsor {
		font-size: 9px;

		color: white;
		span {
			display: block;
			padding-bottom: 2px;
		}
		svg,
		img {
			padding-left: 5px;
			min-width: 90px;
			@media (max-width: 800px) {
				min-width: 50px;
			}
		}
	}
	.slotLab {
		@media (max-width: 600px) {
			display: none;
		}
	}

	.slotLT {
		@media (max-width: 880px) {
			display: none;
		}
	}
`;

const StLogo = styled.h1`
	font-family: ${theme.fontbody};
	font-size: 9px;
	text-align: center;
	color: black;
	z-index: 4;
	svg,
	img {
		min-width: 120px;
		max-width: 100%;
		max-height: 40px;
		@media (max-width: 800px) {
			max-height: 40px;
			min-width: 120px;
		}
	}
`;

export { Container, StLogo };
