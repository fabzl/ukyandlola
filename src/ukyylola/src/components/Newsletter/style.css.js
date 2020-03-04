import styled from 'styled-components';
import theme from '../../styles/theme';

const StNewsletterWrap = styled.section`
	margin-left: auto;
	margin-right: auto;
	max-width: ${theme.maxWidth};
	background: white;
	color: ${theme.black};
	padding: 1rem;
	-webkit-font-smoothing: antialiased;
`;

const StNewsletterHeader = styled.header`
	text-align: center;
	padding: 5rem 0 0;
	h2 {
		font-size: 5.625rem;
		line-height: 5.625rem;
		margin: 0;
		padding: 0;
		@media(max-width: 800px){
			font-size: 3rem;
		}
	}
	hr {
		display: block;
		max-width: 20%;
		border: none;
		border-top: 8px solid ${theme.black};
	}
	p {
		max-width: 30%;
		margin-left: auto;
		margin-right: auto;
	}
`;

const StNewsletterSubHeader = styled.header`
	text-align: center;
	padding: 2rem 0 0;
	h2 {
		font-size: 2rem;
		line-height: 2rem;
		margin: 0;
		padding: 0;
	}
	hr {
		display: none;
	}
	p {
		margin-left: auto;
		margin-right: auto;
	}
`;

const StNewsletterForm = styled.div`
	padding: 1rem 0 1rem 1rem;
	display: flex;
	align-items: flex-end;
	height: 100%;
	justify-content: flex-start;
	@media(max-width: 800px){
		padding: 1rem;
	}
	form {
		margin: 0;
		width: 100%;
	}
	input[type=email],
	button {
		appearance: none;
		border: none;
		background-color: #f2f2f2;
		font-family: ${theme.fonttitle};
		padding: 0.5rem;
		letter-spacing: 0.1rem;
		font-size: 1rem;
		border: 0;
		margin: auto;
	}
	input[type=email] {
		font-size: 0.8rem;
		font-family: "Merriweather", serif;
		display: block;
		width: 100%;
		margin: 0;
		max-width: 300px;
		margin-bottom: 2rem;
	}
	.formWrap {
		padding: 0 0 1rem;
	}
	button {
		cursor: pointer;
		text-decoration: none;
		transition: all 0.3s ease 0.1s;
		letter-spacing: 0.04rem;
		font-family: ${theme.fonttitle};
		font-size: 0.75rem;
		line-height: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.black};
		color: ${theme.clearcolor};
		border-radius: 2rem;
		padding: 0.6rem 1.5rem;
		margin-block-start: 0.4rem;
		align-self: center;
		/* box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3); */
	}
	input[type=checkbox] {
		border: 2px solid gray;
		width: 1rem;
		height: 1rem;
		color: ${theme.black};
	}
	label {
		font-family: "Merriweather", serif;
		font-size: 0.75rem;
		a {
			color: ${theme.red};
			&:hover,
			&:active {
				color: ${theme.red};
			}
		}
	}
	.error {
		display: block;
		padding: 0.2rem 0 0 1rem;
		font-size: 0.725rem;
	}
`;

const StNewsletterFormWrap = styled.div`
	.registered {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 1rem;
		button {
			text-decoration: none;
			transition: all 0.3s ease 0.1s;
			letter-spacing: 0.04rem;
			font-family: ${theme.fonttitle};
			font-size: 0.75rem;
			line-height: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #4CA54C;
			color: ${theme.clearcolor};
			border-radius: 2rem;
			padding: 0.6rem 1.6rem;
			margin-block-start: 0.4rem;
			align-self: center;
			border: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			/* box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3); */
		}
	}
`;

const StNewsletterCart = styled.div`/* border: 1px solid black; */`;

const StNewsletterItems = styled.div`
	padding: 2rem;
	margin: 1rem;
	box-shadow: 0px 21px 46px 0px rgba(0, 0, 0, 0.08);
	background-color: white;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	&.inserted{
		padding: 0;
		background-color: transparent;
		box-shadow: none;
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 0;
		background-color: transparent;
		box-shadow: none;
	}
`;

const StNewsletterItem = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	align-items: center;
	background-color: white;
	box-shadow: 0px 7px 13px 0px rgba(0, 0, 0, 0.12);
	transition: all .3s;
	position: relative;
	overflow: hidden;
	@media(max-width: 600px){
		grid-template-columns: 1fr;
	}
	&:hover {
		cursor: pointer;
		transform: translateY(-0.5rem);
		box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.12);
	}
	&.newsMain {
		grid-column: 1 / -1;
	}
	.col {
		padding: 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		h2 {
			font-size: 1.125rem;
			font-family: ${theme.fonttitle};
			&:after {
				content: '';
				border-top: 5px solid ${theme.grayDark};
				width: 100px;
				display: block;
				margin-top: 0.5rem;
			}
		}
		h3 {
			font-size: 1.125rem;
			font-family: ${theme.fonttitle};
		}
		h4 {
			font-size: 0.75rem;
			font-family: ${theme.fonttitle2};
			letter-spacing: 0.05rem;
			font-style: italic;
			font-weight: 600;
		}
		p {
			font-family: ${theme.fontbody};
			font-size: 0.875rem;
			font-weight: 300;
		}
		button {
			text-decoration: none;
			transition: all 0.3s ease 0.1s;
			letter-spacing: 0.04rem;
			font-family: ${theme.fonttitle};
			font-size: 0.75rem;
			line-height: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${theme.black};
			color: ${theme.clearcolor};
			border-radius: 2rem;
			padding: 0.6rem 1.6rem;
			margin-block-start: 0.4rem;
			align-self: center;
			border: 0;
			align-items: center;
			justify-content: center;
			/* box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3); */
		}
		&:hover {
			button {
				background-color: ${theme.grayLight};
				cursor: pointer;
			}
		}
	}
	.col2 {
		position: relative;
		height: 100%;
		@media(max-width: 600px){
			min-height: 30vh;
		}
		.bg {
			z-index: 1;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${theme.black};
		}
		.content {
			z-index: 2;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			svg {
				min-width: 90px;
				width: 100%;
			}
		}
	}
	.gatsby-image-wrapper {
		transition: all .3s;
		opacity: 0.8;
	}
	&:hover {
		.bg {
			.gatsby-image-wrapper {
				opacity: 0.4;
			}
		}
	}
	.overlay {
		top: 100%;
		height: 100%;
		left: 0;
		right: 0;
		transition: all 0.4s;
		position: absolute;
		background: linear-gradient(rgba(255, 255, 255, 0.1), white 33%);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
		@media(max-width: 600px){
			grid-template-columns: 1fr;
			height: 40vh;
		}
		&.active {
			transform: translateY(-100%);
			@media(max-width: 600px){
				transform: translateY(-180%);
			}

		}
	}
`;

export {
	StNewsletterWrap,
	StNewsletterForm,
	StNewsletterFormWrap,
	StNewsletterCart,
	StNewsletterItems,
	StNewsletterItem,
	StNewsletterHeader,
	StNewsletterSubHeader
};
