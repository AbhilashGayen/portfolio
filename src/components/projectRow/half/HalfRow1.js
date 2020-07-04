import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import Animated from "../../../images/weather.png";
import trivia from "../../../images/trivia.png";

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
  font-family: "Klima";
  font-weight: 900;
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
          href="https://abhilashgayen.github.io/animated-weather-app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Weather"
        >
          <ProjectImage />
        </a>
        <a
          href="https://abhilashgayen.github.io/animated-weather-app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Weather"
        >
          <SubHeading>Weather App</SubHeading>
        </a>
        <ProjectParagraph>
          A weather application with animated sky props that displays weather data based on
          user input.
        </ProjectParagraph>
        <a
          href="https://abhilashgayen.github.io/animated-weather-app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Weather"
        >
          <ProjectLink>
            View Project <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <a
          href="https://abhilashgayen.github.io/trivia-game/"
          target="_blank"
          rel="noopener noreferrer"
          title="Trivia"
        >
          <ProjectImage />
        </a>
        <a
          href="https://abhilashgayen.github.io/trivia-game/"
          target="_blank"
          rel="noopener noreferrer"
          title="Trivia"
        >
          <SubHeading>Knowledge Trivia</SubHeading>
        </a>
        <ProjectParagraph>
          A general knowledge trivia with timer for each question made using Opentdb API.
        </ProjectParagraph>

        <a
          href="https://abhilashgayen.github.io/trivia-game/"
          target="_blank"
          rel="noopener noreferrer"
          title="Trivia"
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
