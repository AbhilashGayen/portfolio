import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/logo512.png"
import linkedin from "../../images/footer-linkedin.svg"
import github from "../../images/footer-github.svg"
import gmail from "../../images/footer-gmail.svg"

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

  @media (max-width: 959px) {
    width: 95%;
    padding: 0 1rem;
    flex-wrap: wrap;
  }
`

const StyledLink = styled(Link)`
  font-family: "Katwijk";
  color: #ff5733;
  font-size: 0.7rem;
  img {
    width: 50px;

    @media (max-width: 959px) {
      width: 25px;
    }
  }
`

const Social = styled.div`
  a {
    font-family: "Katwijk";
    font-size: 1rem;
    color: #f2f2f2;
    margin: 0 1rem 0 30px;

    img {
      width: 35px;
      transition: all 0.4s ease-in-out;

      @media (max-width: 959px) {
        width: 22px;
      }
    }

    img:hover {
      transform: scale(1.2);
    }
  }
`

const Footer = () => (
  <Container>
    <StyledLink stitle="Home | Abhiash" to="/">
      <img src={logo} alt="logo" title="Home | Abhiash Gayen" />
    </StyledLink>
    <Social>
      <a
        title="Github Repository"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/abhilashgayen"
      >
        <img src={github} alt="github" title="github" />
      </a>
      <a
        title="LinkedIn - AbhilashGayen"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/abhilash-gayen"
      >
        <img src={linkedin} alt="LinkedIn" title="linkedIn" />
      </a>
      <a
        title="Gmail"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto: abhilashgayen@gmail.com"
      >
        <img src={gmail} alt="gmail" title="gmail" />
      </a>
    </Social>
  </Container>
)

export default Footer
