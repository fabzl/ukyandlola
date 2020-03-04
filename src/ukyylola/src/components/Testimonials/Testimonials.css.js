import styled from 'styled-components';
import theme from '../../styles/theme';

const TestimonialCard = styled.div`
	background-color: ${theme.clearColor};
	width: 80vw;
	font-family: ${theme.fonttitle2};
	font-style: italic;
	font-weight: 700;
	position: relative;
	@media (max-width: 800px) {
		width: 92vw;
	}
`;
const AvatarPicHolder = styled.div`
	height: 100%;
	width: 30%;
	position: relative;
	float: left;
	overflow: visible;
	margin: 0;
	@media (max-width: 900px) {
		width: 100%;
	}
`;

const AvatarPic = styled.img`
	border-radius: 50%;
	width: 14vw;
	height: 14vw;
	margin: auto;
	@media (max-width: 800px) {
		width: 30vw;
		height: 30vw;
	}
	&:before {
		box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
		content: "";
		border-radius: 50%;
		width: 12vw;
		height: 12vw;
	}
`;

const Container = styled.section`
	background-color: ${theme.clearcolor};
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;
	padding-top: 2rem;
	color: ${theme.black};
	position: relative;
	padding-bottom: 10vh;
	&::after {
		content: "";
		width: 100%;
		background-color: ${theme.grayLight};
		height: 20%;
		position: absolute;
		top: 50%;
	}
	&::before {
		content: "";
		width: 100%;
		background-color: ${theme.deepBlue};
		height: 30%;
		position: absolute;
		bottom: 0%;
	}
`;
const CenteredTitle = styled.h2`
	text-align: center;
	color: ${theme.deepBlue};
	margin-bottom: 3rem;
	font-size: 1.5rem;
	&:after {
		display: block;
		content: "_";
		color: ${theme.red};
		font-size: 3rem;
		margin: 0;
		line-height: 0;
		padding: 0;
	}
`;

const ContentSlider = styled.div`
	position: relative;
	max-width: 60vw;
	@media (max-width: 900px) {
		padding: 3rem 2rem;
	}
	@media (max-width: 500px) {
		max-width: 80vw;
	}

	box-shadow: 0px 34px 50px -20px rgba(0, 0, 0, 0.3), 0px 10px 50px -20px rgba(0, 0, 0, 0.3);
	background-color: ${theme.clearcolor};
	margin-left: auto;
	margin-right: auto;
	padding: 5rem 3rem;
	color: black;
	z-index: 2;
`;
const TextHolder = styled.div`
	color: black;
	/* border: 1px solid red; */
	/* display: flex; */
	float: right;
	position: relative;
	/* float: left; */
	width: 70%;
	box-shadow: none;
	@media (max-width: 900px) {
		width: 100%;
		padding-top: 10px;
	}

	p {
		font-style: italic;
		font-size: 1rem;
		margin-top: 0;
		font-weight: 400;
		line-height: 1.2rem;
		padding: 1rem;
		padding-right: 25px;

		&:before {
			content: "“ ";
			font-size: 5rem;
			font-style: normal;
			text-indent: 0;
			/* position: absolute; */
			transform: translateY(0.6rem);
			float: left;
			display: block;
		}
	}
	h4 {
		margin: 0;
		padding: 0;
		font-size: 0.8rem;
		font-style: italic;
		text-align: right;
		font-weight: 600;
		padding-right: 30px;
	}

	h5 {
		margin: 0;
		font-family: ${theme.fonttitle2};
		font-style: italic;
		padding: 0;
		font-style: italic;
		font-size: 0.8rem;
		font-weight: 300;
		text-align: right;
		padding-right: 30px;
	}
`;

export { Container, ContentSlider, CenteredTitle, AvatarPic, AvatarPicHolder, TestimonialCard, TextHolder };
/*

.container {
    margin: 0 auto;
    padding: 40px;
    width: 80%;
    color: #333;
    background: #419be0;
  }

  h3 {
    background: blue;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
  .variable-width .slick-slide p {
    background: blue;
    height: 100px;
    color: #fff;
    margin: 5px;
    line-height: 100px;
    text-align: center;
  }
  .center .slick-center h3 {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  .center h3 {
    opacity: 0.8;
    transition: all 300ms ease;
  }
  .content {
    padding: 20px;
    margin: auto;
    width: 90%;
  }
  .slick-slide .image {
    padding: 10px;
  }
  .slick-slide img {
    border: 5px solid #fff;
    display: block;
    margin: auto;
  }
  .slick-slide img.slick-loading {
    border: 0;
  }
  .slick-slider {
    margin: 30px auto 50px;
  }
  .slick-dots {
    margin-left: 0;
  }
  .slick-thumb {
    bottom: -45px;
  }
  .slick-thumb li {
    width: 60px;
    height: 45px;
  }
  .slick-thumb li img {
    filter: grayscale(100%);
  }
  .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    .center {
      margin-left: -40px;
      margin-right: -40px;
    }
    .center .slick-center h3 {
      color: #e67e22;
      opacity: 1;
      transform: scale(1);
    }
    .center h3 {
      opacity: 0.8;
      transform: scale(0.95);
      transition: all 300ms ease;
    }
  }
  .slick-vertical .slick-slide {
    height: 180px;
  }
  .slick-arrow {
    background-color: grey;
  }
  .slick-arrow:hover {
    background-color: grey;
  }

*/
