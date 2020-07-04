import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/landing"

const IndexPage = () => (
  <Layout height="true">
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
