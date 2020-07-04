import React from "react"
import landing from "../../images/landing.svg"
import ForwardLink from "../forwardLink"

import { Container, Div, Left, Right, ButtonContainer } from "./styles"
import Button from "../button/button"

const Landing = () => {
  return (
    <>
      <Container>
        <Div>
          <Left>
            <h1>
              Hi there,
              <br />
              I'm Abhilash
              <span className="color wave">!</span>
            </h1>
            <p>
              Front End <span className="color">Developer</span>, <br />
              Software <span className="color">Engineer</span>,
              <br />
              and working at <span className="color">Wipro</span>.
            </p>
            <ButtonContainer>
              <Button />
            </ButtonContainer>
          </Left>
          <Right>
            <img src={landing} alt="Landing" />
          </Right>
        </Div>
      </Container>
      <ForwardLink label="about" navigate="/about" />
    </>
  )
}

export default Landing
