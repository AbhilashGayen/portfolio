import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/work/work"

const WorkPage = () => (
  <Layout height="false">
    <SEO title="Work" />
    <Work />
  </Layout>
)

export default WorkPage
