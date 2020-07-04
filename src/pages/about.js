import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"

const AboutPage = () => (
  <Layout height={false}>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
