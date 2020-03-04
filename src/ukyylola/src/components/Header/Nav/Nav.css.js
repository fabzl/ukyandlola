import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.nav`
  /* position: absolute;
  right:20px;
  top: 18px;
  border: 1px solid #0f0; */

  ul {
		display: block;
		list-style: none;
		padding: 0;
    margin-top:0;
		li {
      font-family: ${theme.fonttitle};
			width: 100%;
			font-size: 0.4rem;
      text-align: center;
      color:  ${theme.clearcolor};
      padding-bottom: 0.3vh;
      a{
        font-size: 0.7rem;
      }
      &:after {
        display: block;
        width: 50%;
        margin: 3% auto;
        content: "";
        border-bottom: 2px dotted ${theme.clearcolor};
      }
		}
`;
