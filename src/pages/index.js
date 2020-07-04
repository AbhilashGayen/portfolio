import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"
import Landing from "../components/landing/landing"

const BaseStyle = styled.html`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
`

const IndexPage = () => (
  <Layout>
    <Landing />
  </Layout>
)

export default IndexPage
