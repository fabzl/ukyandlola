import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.section`
	position: relative;
	/* margin-top: 10vh; */
	overflow: hidden;
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
`;

export { Container, Content };
