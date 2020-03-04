import styled from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.section`
	background-color: ${theme.deepBlue};
	max-width: ${theme.overWidth};
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;
	padding-top: 2rem;
	padding-bottom: 3rem;
`;
const CenteredTitle = styled.h2`
	text-align: center;
	background-color: ${theme.deepBlue};
	margin-bottom: 0.5rem;
	font-size: 2rem;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;

const CenteredP = styled.p`
	text-align: center;
	margin-top: 0.5rem;
	margin-bottom: 2rem;
`;

const ContentSlider = styled.div`
	position: relative;
	overflow: hidden;
	max-width: ${theme.overWidth};
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
`;
const SlickImage = styled.div`
	overflow: hidden;
	position: relative;
	img {
		max-width: 300px;
		width: 30vw;
		@media (max-width: 900px) {
			width: 40vw;
			margin: auto;
		}
		@media (max-width: 600px) {
			width: 80vw;
		}
	}
`;

const TextoOver = styled.div`
	max-width: 300px;
	width: 30vw;
	position: absolute;
	top: 0px;
	background-color: rgba(0, 0, 0, .8);
	height: 100%;
	text-align: center;
	padding: 0px 20px;
	display: flex;
	justify-content: center;

	opacity: 0;
	transition: all 500ms;
	overflow: hidden;
	&:hover {
		opacity: 1;
		transform: translateY(0);
	}
	& .caja-texto {
		margin: auto;
		& p {
			margin-top: 0px;
		}
	}
	@media (max-width: 900px) {
		display: none;
	}
`;

export { Container, ContentSlider, CenteredTitle, CenteredP, SlickImage, TextoOver };

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
