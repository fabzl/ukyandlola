
import React from "react"
import Subcontent from './Subcontent'
import Title from "./Title"
import More from "./More"
import { StyledLink } from "./Content.css"

const Block = ({ to, ...rest }) => (
<StyledLink to={to}>
  <Title {...rest} />
  <Subcontent {...rest} />
  <More />
</StyledLink>
)

export default Block