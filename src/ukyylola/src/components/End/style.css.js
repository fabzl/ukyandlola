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

const BuyButton = styled.a`
	cursor: pointer;
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
	background-size: 100% 45%;
	margin-left: auto;
	margin-right: auto;
`;

const Content = styled.div`
	display: flex;
	position: relative;
	width: 100%;
`;

const TextHolder = styled.div`
	background-color: ${theme.white};
	flex-direction: column;
	display: flex;
	justify-content: space-around;
	margin-left: auto;
	margin-right: auto;
	color: ${theme.complementary};
	padding-top: 5vh;
	padding-bottom: 5vh;
`;

export { Container, Content, TextHolder, LogoContainer, BuyButton, IconHolder, CenteredTitle, CenteredP };
