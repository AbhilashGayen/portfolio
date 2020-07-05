import React from "react"
import styled from "styled-components"
import Header from "./header/header"
import "./layout.css"
import GlobalFonts from "../assets/fonts/font"
import Footer from "./footer/footer"
import { motion } from "framer-motion"

const Main = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  height: ${props => (props.height === "true" ? "100vh" : "100%")};
  margin: 0;
  margin-bottom: 15vh;
  @media (max-width: 720px) {
    margin-bottom: 10vh;
  }
`

const FooterStyle = styled.div`
  position: fixed;
  display: flex;
  margin: 0;
  bottom: 0;
  width: 100%;
  height: 15vh;
  padding: 0;
  background: #4b466f;
  font-size: 30px;
  background-color: #232323;

  @media (max-width: 720px) {
    height: 10vh;
  }
`

const Layout = ({ height, children }) => {
  return (
    <>
      <GlobalFonts />
      <Header />
      <motion.div enterAfterExit
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Main height={height}>{children}</Main>
        <FooterStyle>
          <Footer />
        </FooterStyle>
      </motion.div>
    </>
  )
}

export default Layout
