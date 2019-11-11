import PropTypes from "prop-types"
import React from "react"
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

const SectionHeader = styled.header`
   min-height: 100vh;
   position: relative;
   display: flex;
   align-items: center;
   &::before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.8);
      z-index: -1;
   }
   .container{
      width: 100%;
   }
`
const Img = styled.img`
   position: absolute !important;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: -2;
`
const Creative = styled.p`
   font-size: 15px;
   letter-spacing: 5px;
`

const Header = ({ siteTitle }) => {
   const data = useStaticQuery(graphql`
      query {
         file(relativePath: {eq: "header.jpg"}) {
            childImageSharp {
               fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)
   return (
      <SectionHeader className="py-5">
         <Img as={Image} fluid={data.file.childImageSharp.fluid} />
         <Container className="text-white text-center">
            <h2>Portfolio</h2>
            <Creative>this is me being creative</Creative>
         </Container>
      </SectionHeader>
   )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
