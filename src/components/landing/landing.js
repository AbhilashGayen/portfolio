import React from "react"
import ForwardLink from "../forwardLink"
import { Container, Left, Right, ButtonContainer, Div } from "./styles"
import Button from "../button/button"
import { motion } from "framer-motion"
import landing from "../../images/landing1.svg"

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
                Frontend <span className="color">Developer</span>,
              </p>
              <p>
                Software <span className="color">Engineer</span>,
              </p>
              <p className="line-break">
                and working at <span className="color">Wipro</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "10vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <ButtonContainer>
                <Button />
              </ButtonContainer>
            </motion.div>
          </Left>
          <Right>
            <img src={landing} alt="Landing"></img>
          </Right>
        </Div>
        <ForwardLink label="about" navigate="/about" />
      </Container>
    </>
  )
}

export default Landing
