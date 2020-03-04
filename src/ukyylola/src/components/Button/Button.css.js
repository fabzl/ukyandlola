import styled from "styled-components"
import theme from "../../styles/theme"

const Button = styled.div`
  transition: all 300ms ease-out;
  font-size: 2rem;
  width: auto;
  display: block;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.accent};
  border: 3px solid;
  border-color: ${theme.accent};
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  span {
    font-size: 1rem;
    padding-right: 1rem;
  }
  &:hover,
  &:active {
    color: ${theme.color};
    background-color: ${theme.accent};
  }
`
export { Button }
