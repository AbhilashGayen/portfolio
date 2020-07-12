import React from "react"
import TechStack from "../../components/TechStack"
import { AboutStyle } from "./styles"
import ForwardLink from "../forwardLink"
import { motion } from "framer-motion"
import Image from "./image"

const About = () => {
  return (
    <>
      <AboutStyle>
        <Image />
        <br />
        <motion.div
          initial={{ x: "-50%", opacity: 0, skew: 45 }}
          animate={{ x: 0, opacity: 1, skew: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h1>Hello</h1>
        </motion.div>
        <p>
          I'm focused on building high-quality, thoughtful, and intuitive
          websites and web applications. I graduated in 2018, after completing a
          4-year Bachelor of Engineering program in Computer Science and
          Engineering. Since then, I am working at Wipro Limited for their
          digital banking sector.
        </p>
        <p>
          At Wipro Limited, I've worked alongside senior designers, developers
          and architects who have raised my standards for what is expected of
          any application. By being a part of their breakthrough solution, I've
          had the opportunity to interact and manage multiple clients across
          various time-zones.
        </p>
        <p>
          Through these experiences, I've had the opportunity to create
          memorable products that are not only enjoyable to use but are written
          in code that's maintainable and easy to understand.
        </p>
        <p>
          I like to spend my free time adding on to my web stack and chasing my
          dream of becoming a complete software engineer. Other than coding, I
          find myself binge-watching new series or reading a classic, petting
          all the dogs I can, or scoping out the best food joints in town.
        </p>
        <TechStack />
      </AboutStyle>
      <ForwardLink label="work" navigate="/work" />
    </>
  )
}

export default About
