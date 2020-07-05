import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import Animated from "../../../images/business-manager.png";
import trivia from "../../../images/ecommerce.png";

const ProjectContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  margin: 0px auto;
  height: unset;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
    height: 500px;
  }
`;

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

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;

  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-image: url(${Animated});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${trivia});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
  color: black;
  font-family: 'Klima'
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

function HalfRow2() {
  return (
    <ProjectContainer>
      <Project>
        <a
          href="https://github.com/AbhilashGayen/business-manager"
          target="_blank"
          rel="noopener noreferrer"
          title="Business Manager"
        >
          <ProjectImage />
        </a>
        <a
          href="https://github.com/AbhilashGayen/business-manager"
          target="_blank"
          rel="noopener noreferrer"
          title="Business Manager"
        >
          <SubHeading>Business Manager</SubHeading>
        </a>
        <ProjectParagraph>
          Business Manager app to add and track customers, invoices with an
          interactive dashboard.
        </ProjectParagraph>
        <a
          href="https://github.com/AbhilashGayen/business-manager"
          target="_blank"
          rel="noopener noreferrer"
          title="Business Manager"
        >
          <ProjectLink>
            View Code <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <a
          href="https://abhi-ecommerce-live.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ecommerce"
        >
          <ProjectImage />
        </a>
        <a
          href="https://abhi-ecommerce-live.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ecommerce"
        >
          <SubHeading>Clothing Ecommerce</SubHeading>
        </a>
        <ProjectParagraph>
          A very simple ecommerce app built using react and redux. A Udemy
          course, my gateway to the world of react.
        </ProjectParagraph>
        <a
          href="https://abhi-ecommerce-live.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Ecommerce"
        >
          <ProjectLink>
            View Project <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
    </ProjectContainer>
  );
}

export default HalfRow2;
