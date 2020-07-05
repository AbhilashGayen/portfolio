import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../Media"
import Heading from "../../Heading"
import Paragraph from "../../Paragraph"
import Launchpad from "../../../images/Launchpad.png"

const ProjectContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding-top: 2rem;
  margin-bottom: 0px;
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
  color: gray;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 119px;
    display: block;
    margin: auto;
  }

  :hover {
    /* border-bottom: 2px solid black; */
  }

  span {
    font-size: 20px;
  }
`

const ProjectImage = styled.img`
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
  font-family: "AcuminBold";

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
          <ProjectImage src={`${Launchpad}`} alt="launchpad" />
          <SubHeading>NetOxygen Launchpad</SubHeading>
        </a>
        <ProjectParagraph>
          Currently working on Launchpad at Wipro Limited, as a frontend
          developer, gradually evolving into a full stack developer.
          <br />
          The NetOxygen Launchpad portal transforms the loan application
          experience by enabling device/OS independent access, actionable
          real-time to-do items, uploading of documents with ADR/OCR capability,
          intelligent chatbot and auto-population of key borrower information.
        </ProjectParagraph>
      </Project>
    </ProjectContainer>
  )
}

export default FullProjectRow
