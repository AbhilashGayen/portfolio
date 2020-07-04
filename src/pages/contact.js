import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact/contact"

const ContactPage = () => (
  <Layout height={false}>
    <SEO title="Contact" />
    <Contact />
  </Layout>
)

export default ContactPage
