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
    padding: 0.5rem 0;
  }

  p {
    color: #282c34;
    font-family: "Klima";
    font-size: 18px;
    line-height: 1.8rem;
    letter-spacing: 0.6px;
    padding: 0.6rem 0;
  }

  @media (max-width: 720px) {
    width: 90%;
    padding-top: 1rem;
  }
`
