import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.section`
	position: relative;
	overflow: hidden;
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: radial-gradient(ellipse at center, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 100%);
	min-height: 50vh;
	background-repeat: no-repeat;
	background-position: 100%;
	background-size: cover;
	text-align: left;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	font-style: italic;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 500px) {
		width: 80%;
	}
`;
const TextHolder = styled.div`
	color: ${theme.clearcolor};
	font-family: ${theme.fonttitle1};
	font-style: italic;
	font-weight: 700;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 3rem;
	padding-bottom: 3rem;

	p {
		padding-top: 1rem;
		font-style: italic;
		font-size: 1rem;
		margin-top: 0;
		font-weight: 400;
		line-height: 1.2rem;
		/* font-family: ${theme.fonttitle2};
font-style: italic; */
		font-style: italic;
		text-align: left;
	}
	h4 {
		margin: 0;
		padding: 0;
		font-size: 0.9rem;
		font-style: italic;
		text-align: right;
		font-weight: 600;
		margin-top: 1.8rem;
	}

	h5 {
		margin: 0;
        font-family: ${theme.fonttitle3};
		padding: 0;
		font-style: italic;
		font-size: 0.8rem;
		font-weight: 300;
		text-align: right;
	}
`;

export { Container, Content, TextHolder };
