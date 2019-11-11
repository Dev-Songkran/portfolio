import React from "react"
import styled from "styled-components"

const Title = styled.h4`
   letter-spacing: 6px;
   margin-bottom: 38px;
   font-weight: 700;
`

export default ({ title }) => {
   return <Title>{title}</Title>
}
