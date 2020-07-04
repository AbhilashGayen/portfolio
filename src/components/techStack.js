import React from "react";
import styled from "styled-components";

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 1rem 0;
  justify-items: flex-start;

  img {
    transition: all 0.4s ease-in-out;
    :hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TechStack = () => (
  <>
    <h1>Skills</h1>
    <Logos>
      <img
        src={require("../images/logo-angular.svg")}
        width="50"
        height="50"
        alt="Angular"
      />
      <img
        src={require("../images/logo-react.svg")}
        width="50"
        height="50"
        alt="React"
      />
      <img
        src={require("../images/logo-html.svg")}
        width="50"
        height="50"
        alt="HTML"
      />
      <img
        src={require("../images/logo-css.svg")}
        width="50"
        height="50"
        alt="CSS"
      />
      <img
        src={require("../images/logo-js.svg")}
        width="50"
        height="50"
        alt="JS"
      />
      <img
        src={require("../images/logo-ts.svg")}
        width="50"
        height="50"
        alt="TS"
      />
      <img
        src={require("../images/logo-csharp.svg")}
        width="50"
        height="50"
        alt="C#"
      />
      <img
        src={require("../images/logo-mongo.svg")}
        width="50"
        height="50"
        alt="Mongo"
      />
      <img
        src={require("../images/logo-teradata.svg")}
        width="50"
        height="50"
        alt="Teradata"
      />
      <img
        src={require("../images/logo-figma.svg")}
        width="50"
        height="50"
        alt="Figma"
      />
      <img
        src={require("../images/logo-framer.svg")}
        width="50"
        height="50"
        alt="Framer"
      />
    </Logos>
  </>
);

export default TechStack;
