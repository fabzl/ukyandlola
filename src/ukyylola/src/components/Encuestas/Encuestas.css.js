import styled from 'styled-components';
import theme from '../../styles/theme';
import BGImageURL from '../../images/encuestas_BG.jpg';

const LogoContainer = styled.div`
	width: 100%;
	height: auto;
`;

const Button = styled.a`
	transition: all 300ms ease-out;
	font-size: 1rem;
	letter-spacing: 0.04rem;
	font-family: ${theme.fonttitle};
	font-weight: 700;
	width: auto;
	display: block;
	max-width: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.black};
	text-decoration: none;
	background-color: ${theme.clearcolor};
	margin-left: auto;
	margin-right: auto;
	border-radius: 2rem;
	padding: 1rem 2rem;
	margin-block-start: 1rem;
	margin-block-end: 1rem;

	&:hover,
	&:active {
		color: ${theme.color};
		background-color: ${theme.clearcolor};
	}
`;

const Container = styled.section`
	position: relative;
	min-height: 70vh;
	overflow: hidden;
	max-width: ${theme.overWidth};
	background-color: white;
	display: flex;
	background-size: cover;
	margin-left: auto;
	margin-right: auto;
	background-image: url(${BGImageURL});
	background-repeat: no-repeat;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	width: 50%;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
`;

const TextHolder = styled.div`
	color: white;
	min-height: 65%;
	background-color: rgba(0, 0, 0, 0.7);
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	padding: 15% 15%;
	text-align: center;
	font-weight: 600;
	font-family: ${theme.fonttitle4};
	line-height: 1.4rem;
	h4 {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	@media (max-width: 500px) {
		padding: 10% 5%;
	}
`;

export { Container, Content, TextHolder, LogoContainer, Button };
