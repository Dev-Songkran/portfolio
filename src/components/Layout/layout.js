import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../../assets/sass/app.scss"
if (typeof window !== "undefined") {
   require("smooth-scroll")('a[href*="#"]')
}
const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
            }
         }
      }
   `)

   return (
      <>
         <Header siteTitle={data.site.siteMetadata.title} />
         <main>{children}</main>
      </>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
