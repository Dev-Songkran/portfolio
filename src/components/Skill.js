import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

const Skill = styled.section``

export default () => {
   return (
      <Skill id="skill">
         <Row noGutters>
            <Col lg={8}>
               <div className="p-5">
                  <h4>Skill</h4>
               </div>
            </Col>
            <Col lg={4} className="bg-dark">
               <img
                  width="100%"
                  alt="skill"
                  src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
               />
            </Col>
         </Row>
      </Skill>
   )
}
