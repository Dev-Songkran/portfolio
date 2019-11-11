import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"
import AboutMe from "../components/AboutMe"
import Skill from "../components/Skill"

const IndexPage = () => (
   <Layout>
      <SEO title="🐺" />
      <AboutMe />
      <Skill />
   </Layout>
)

export default IndexPage
