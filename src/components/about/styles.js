import styled from "styled-components"

export const AboutStyle = styled.div`
  width: 50%;
  margin: auto;
  padding-top: 4rem;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    color: #282c34;
    font-family: "Graph";
    letter-spacing: 0.2px;
  }

  p {
    color: #282c34;
    font-family: "Klima";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 720px) {
    width: 90%;
    padding-top: 1rem;
  }
`
