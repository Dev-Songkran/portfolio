import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import Profile from "./Profile"

const About = styled.section`
   min-height: 100vh;
`

export default () => {
   return (
      <About id="aboutme">
         <Row noGutters>
            <Col sm={4} className="bg-dark">
               <img
                  width="100%"
                  alt="about me"
                  src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
               />
            </Col>
            <Col sm={8}>
               <Profile title="ABOUT ME">
                  <div className="mb-4">
                     <p>Profile</p>
                     <h6>MR. PANUSON NORKAEW / NU</h6>
                     <h6>SEP, 26 1994 AGE.25</h6>
                     <h6>CHIANGRAI, THAILAND</h6>
                     <h6>N.PANUSON@GMAIL.COM</h6>
                     <h6>082-481xxxx</h6>
                  </div>
                  <div className="mb-4">
                     <p>Education</p>
                     <h6>CHIANGRAI VOCATIONAL COLLECE (CVC.) [2009-2012]</h6>
                     <div>
                        <small>: Business Computer</small>
                     </div>
                  </div>
               </Profile>
            </Col>
         </Row>
      </About>
   )
}
