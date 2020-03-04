import styled from 'styled-components';
import theme from '../../styles/theme';

const Container2 = styled.section`
	position: relative;
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	margin-top: -5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Mobile = styled.img`
	position: absolute;
	bottom: -10vh;
	right: 10vw;
	max-width: 26vw;
	z-index: 30;

	@media (max-width: 700px) {
		max-width: 30vw;
	}
`;

const Container = styled.div`
	padding-top: 10vh;
	background-color: ${theme.grayLight};
	position: relative;
	height: 100%;
`;

const StoreHolder = styled.div`
	img {
		max-width: 10vw;
		margin-right: 0.5rem;
	}

	@media (max-width: 500px) {
		img {
			max-width: 15vw;
			margin-right: 0.5rem;
		}
	}
`;

const CollapseIcon = styled.img`
	width: 2rem;
	position: absolute;
	height: 2rem;
	top: 1.5rem;
	right: 1rem;
`;

const ExpandedTextHolder = styled.div`
	padding: 6rem 9rem;
	@media (max-width: 500px) {
		padding: 3rem 4rem;
	}
	position: relative;
	p {
		font-style: italic;
		font-size: 1.2rem;
	}
	h4 {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-style: italic;
	}

	h5 {
		margin: 0;
		font-family: ${theme.fonttitle3};
		padding: 0;
		font-size: 0.8rem;
		font-weight: 300;
	}
`;

const ExpandedHolder = styled.div`
	font-family: ${theme.fonttitle2};
	font-style: italic;
	font-weight: 700;
	color: ${theme.clearcolor};
	padding: 0 3rem;
	margin-top: 10vh;
	overflow: hidden;
	width: 100%;
	max-height: 0;
	height: auto;
	transition: all 1s;
	position: relative;
	&.active {
		max-height: 200vh;
		background-color: ${theme.deepBlue};
	}
`;

const Content = styled.section`
	background-color: ${theme.clear};
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
	width: 100%;
	justify-content: space-between;
	flex-direction: row;
	padding-left: 10vw;
	padding-right: 10vw;
`;
const TextHolder = styled.div`
	color: ${theme.deepBlue};
	height: 100%;
	/* border: 1px solid red; */
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	margin-right: auto;
	max-width: 40vw;
	padding-top: 1rem;
	&:after {
		content: "";
		position: absolute;
		/* left: calc(10vw + 2rem); */
		top: 0;
		height: 1px;
		width: 20%; /* or 100px */
		border-top: 0.5rem solid ${theme.clearcolor};
		transition: all 0.5s 1s;
	}
`;
const Button = styled.div`
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
	color: white;
	background-color: ${theme.black};
	margin-left: 0;
	margin-right: auto;
	border-radius: 2rem;
	padding: 1rem 2rem;
	margin-block-start: 1rem;
	margin-block-end: 1rem;

	&:hover,
	&:active {
		color: ${theme.color};
		background-color: black;
	}
`;

export {
	Container,
	Container2,
	Content,
	TextHolder,
	Button,
	ExpandedHolder,
	ExpandedTextHolder,
	CollapseIcon,
	StoreHolder,
	Mobile
};
