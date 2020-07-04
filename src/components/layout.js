import React from "react"
import styled from "styled-components"
import Header from "./header/header"
import "./layout.css"
import GlobalFonts from "../assets/fonts/font"
import Footer from "./footer/footer"

const Main = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  height: ${props => (props.height === "true" ? "100vh" : "100%")};
  margin: 0;
  margin-bottom: 20vh;
  box-shadow: 3px 2px 2px 0px #f4f3ee;
`

const FooterStyle = styled.div`
  position: fixed;
  display: flex;
  margin: 0;
  bottom: 0;
  width: 100%;
  height: 20vh;
  padding: 0;
  background: #4b466f;
  font-size: 30px;
  background-color: #232323;
 
`

const Layout = ({ height, children }) => {
  return (
    <>
      <GlobalFonts />
      <Header />
      <Main height={height}>{children}</Main>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  )
}

export default Layout
