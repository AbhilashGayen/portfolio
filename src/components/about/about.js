import React from "react"
import TechStack from "../../components/TechStack"
import { AboutStyle } from "./styles"
import about from "../../images/about.png"

const About = () => {
  return (
    <AboutStyle>
      <img src={about} alt="About" width="100%" />
      <br />
      <h1>Hello</h1>
      <p>
        I'm a frontend developer focused on building high-quality, thoughtful,
        and intuitive websites and web applications. I graduated in 2018, after
        completing a 4-year Bachelor of Engineering program in Computer Science.
        Since then, I am working as a frontend developer in Wipro Limited for
        their digital banking sector.{" "}
      </p>
      <p>
        As a developer at Wipro Limited, I've worked alongside senior designers,
        developers and architects who have raised my standards for whats
        expected of any application. By being a part of their breakthrough
        solution, I've had the opportunity to interact and manage multiple
        clients at the same time.
      </p>
      <p>
        Through these experiences, I've had the opportunity to create memorable
        products that are not only enjoyable to use but are written in code
        that's maintainable and easy to understand.
      </p>
      <p>
        I like to spend my free time adding on to my web stack and chasing my
        dream of becoming a software engineer. Other than coding, I find myself
        binge-watching new series or reading a classic, petting all the dogs I
        can, or scoping out the best food joints in town.
      </p>
      <TechStack />
    </AboutStyle>
  )
}

export default About
