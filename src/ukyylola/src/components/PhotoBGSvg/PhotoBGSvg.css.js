import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.section`
	position: relative;
	overflow: hidden;
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	min-height: 100vh;
	background-repeat: no-repeat;
	background-position: 100%;
	background-size: cover;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	font-style: italic;
	margin-left: auto;
	margin-right: auto;

	/* @media (max-width: 500px) {
		width: 80%;
	} */
`;

const SVGholder = styled.div`
	width: 40vw;
	height: 40vh;
	display: flex;
	flex-direction: column;
`;

export { Container, Content, SVGholder };
