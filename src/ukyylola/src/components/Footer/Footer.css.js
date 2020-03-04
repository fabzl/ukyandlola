import styled from 'styled-components';
import theme from '../../styles/theme';

const LogoContainer = styled.div``;
const LegalContainer = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding-top: 0.5rem;
`;

const Container = styled.header`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: ${theme.black};
	padding: 20px 0;

	h1 {
		margin-bottom: 10px;
		svg {
			max-height: 25px;
		}
	}
	h6 {
		font-size: 0.6rem;
		color: ${theme.clearcolor};
		margin: 0px;
		padding-left: 1rem;
		display: inline-block;
	}
	a {
		color: ${theme.clearcolor};
		font-family: ${theme.fonttitle2};

		font-size: 0.6rem;
		transition: color 0.2s ease;
		text-decoration: none;
		&:hover {
			color: inherit;
		}
	}
`;

const StLogo = styled.div`
	font-family: ${theme.fontbody};
	font-size: 10px;
	text-align: center;
	color: white;
	text-transform: uppercase;
	display: block;
	svg,
	img {
		min-width: 150px;
		max-width: 100%;
		max-height: 40px;
	}
`;

export { Container, StLogo, LogoContainer, LegalContainer };
