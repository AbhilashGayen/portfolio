import React from "react"
import styled from "styled-components"


const Main = styled.div`
  position: relative;
  z-index: 2;
  background: orange;
  height: 100vh;
  margin-bottom: 20vh;
  box-shadow: 3px 2px 2px 0px rgba(51, 51, 51, 0.5);
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 20vh;
  padding-left: 50px;
  background: #4b466f;
  font-size: 30px;
  color: #f56469;
`

const Layout = () => {
  return (
    <>
      <Main>
        Main
      </Main>
      <Footer>
        Footer
      </Footer>
    </>
  )
}

export default Layout
