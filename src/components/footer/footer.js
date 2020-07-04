import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../Media"
import logo from "../../images/logo512.png"

const Container = styled.div`
  
  padding: 2rem 1rem;
  width: 80%;
  height: auto;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;  
  justify-content: space-between;

  img {
    margin: 0;
  }

  @media (max-width: 720px) {
    width: 95%;
    padding: 0 1rem;
    flex-wrap: wrap;
  }
`

const StyledLink = styled(Link)`
  font-family: "Katwijk";
  color: #ff5733;
  font-size: 0.7rem;
`

const Social = styled.div`
  a {
    font-family: "Katwijk";
    font-size: 1rem;
    color: #f2f2f2;
    margin: 0 1rem 0 30px;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;

    :hover {
      border-bottom: 2px solid whitesmoke;
    }
  }
`

const Footer = () => (
  <Container>
    <StyledLink stitle="Home | Abhiash" to="/">
      <img src={logo} alt="logo" width="45" />
    </StyledLink>
    <Social>
      <a
        title="Github Repository"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/abhilashgayen"
      >
        github
      </a>
      <a
        title="LinkedIn - AbhilashGayen"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/abhilash-gayen"
      >
        linkedin
      </a>
    </Social>
  </Container>
)

export default Footer
