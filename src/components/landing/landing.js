import React from "react"
import landing from "../../images/landing.svg"
import ForwardLink from "../forwardLink"

import { Container, Div, Left, Right, ButtonContainer } from "./styles"
import Button from "../button/button"
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <>
      <Container>
        <Div>
          <Left>
              <h4>Hi there, I am</h4>
            <motion.div
              initial={{ y: "5vw", opacity: 0 }}
              animate={{ y: 0, opacity: 1, skew: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <h1>
                Abhilash
                <span className="color wave">!</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p>
                Frontend <span className="color">Developer</span>, <br />
                Software <span className="color">Engineer</span>,
                <br />
                and working at <span className="color">Wipro</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "10vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{ delay: 1, duration: 1 }}
            >
              <ButtonContainer>
                <Button />
              </ButtonContainer>
            </motion.div>
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
