import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

const NavCustom = styled(Nav)`
   .nav-link {
      letter-spacing: 5px;
      font-size: 14px;
   }
`

export default () => {
   return (
      <NavCustom className="justify-content-center">
         <Nav.Item>
            <Nav.Link className="text-white-50" as={Link} to="/">
               HOME
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link className="text-white-50" as={Link} to="/#aboutme">
               ABOUT ME
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link className="text-white-50" as={Link} to="/#skill">
               SKILL
            </Nav.Link>
         </Nav.Item>
         <Nav.Item>
            <Nav.Link className="text-white-50" as={Link} to="/#project">
               WORK PROJECT
            </Nav.Link>
         </Nav.Item>
      </NavCustom>
   )
}
