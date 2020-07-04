import styled, { keyframes } from "styled-components"

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const Container = styled.div`
  height: auto;
  width: auto;
  margin: 0;
  padding: 0;
`

export const Div = styled.div`
  width: 80%;
  height: auto;
  overflow: hidden;
  margin: auto;
  padding: auto 5rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    width: 90%;
    padding: 0;
    flex-direction: column;
  }
`

export const Left = styled.div`
  float: left;
  width: 40%;
  height: auto;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    display: inline-block;
    font-size: 4.7vw;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-family: "RadioGrotesk";
    letter-spacing: 0.2rem;
    color: #293241;
  }

  p {
    font-size: 2.3vw;
    line-height: 1.4;
    font-family: "Klima";
    letter-spacing: 0.1rem;
  }

  .color {
    color: red;
  }

  .wave {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: ${wave};
    display: inline-block;
    transform-origin: 70% 70%;
  }

  @media (max-width: 720px) {
    text-align: center;
    width: 100%;
    margin: 2rem auto 0 auto;
    h1 {
      font-size: 11vw;
      line-height: 1.5;
    }

    p {
      font-size: 5.7vw;
      line-height: 1.5;
      letter-spacing: 0.1rem;
    }
  }
`

export const Right = styled.div`
  float: right;
  width: 60%;
  height: auto;
  color: white;
  margin-top: 1rem;

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 100%;
    margin-top: 2rem;
    img {
      width: 100%;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 1.5rem;
  margin-left: 0;
  padding: 0;

  @media (max-width: 720px) {
    margin-top: 1.5rem;
    flex-direction: column;
    justify-content: center;
  }
`
