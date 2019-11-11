import React from "react"
import styled from "styled-components"
import TitleProfile from "./TitleProfile"

const Profile = styled.section`
   padding: 60px;
   p {
      font-style: italic;
      font-size: 14px;
      letter-spacing: 5px;
      color: #c3b48f;
   }
   h6 {
      font-weight: 700;
   }
`

export default ({ title, children }) => {
   return (
      <Profile>
         <TitleProfile title={title} />
         {children}
      </Profile>
   )
}
