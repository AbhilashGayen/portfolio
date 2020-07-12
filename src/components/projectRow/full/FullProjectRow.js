import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../Media"
import Heading from "../../Heading"
import Paragraph from "../../Paragraph"
import Image from "./image"
import { motion } from "framer-motion"

const ProjectContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding-top: 2rem;
  margin-bottom: 30px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: auto;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 80%;
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
  }
`

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
  cursor: pointer;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 78px;
    display: block;
    margin: auto;
  }
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    font-size: 20px;
  }
`

const ProjectImage = styled(Image)`
  width: 100%;
  border-radius: 4px;
  transition-duration: 0.3s;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: auto;
  }
`
const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  margin: auto;
  transition-duration: 0.3s;

  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }
`

const SubHeading = styled(Heading)`
  color: black;
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
  font-family: "Klima";

  @media (min-width: ${breakpoints.mobileMax}) {
    text-align: center;
    margin: 30px auto 0 auto;
  }
`

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
    text-align: center;
    margin: 10px auto 20px auto;
  }
`

function FullProjectRow() {
  return (
    <ProjectContainer>
      <Project>
        <a
          href="https://www.wipro.com/banking/gallagher/products/netoxygen-launchpad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage />
          <motion.div
            initial={{ y: "3vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SubHeading>NetOxygen Launchpad</SubHeading>
          </motion.div>
        </a>
        <ProjectParagraph>
          Working for NetOxygen at Wipro has taught me so much about myself and
          about the professional I aim to be. I learnt a ton about Angular,
          TypeScript, SQL but I also learnt so much about how to be a developer
          with integrity, communicate across teams and clients, and be a
          valuable member. Working alongside extremely talented developers
          inspired me and pushed my boundaries as a professional.
        </ProjectParagraph>
        <a
          href="https://www.wipro.com/banking/gallagher/products/netoxygen-launchpad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectLink>
            View Site <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
    </ProjectContainer>
  )
}

export default FullProjectRow
