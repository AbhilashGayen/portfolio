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
  width: 45%;
  height: auto;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    padding-top: 0.5rem;
    display: inline-block;
    font-size: 68px;
    line-height: 1.1;
    margin-bottom: 0.3rem;
    font-family: "AcuminBold";
    letter-spacing: 0.1rem;
    color: #22223b;
    opacity: 0.9;
  }

  h4 {
    padding-left: 0.3vw;
    margin: 0;
    display: inline-block;
    font-size: 18px;
    font-family: "AcuminBold";
    color: #22223b;
    opacity: 0.8;
  }

  p {
    color: #242423;
    font-size: 42px;
    line-height: 1.4;
    font-family: "Klima";
    letter-spacing: 0.15rem;
  }

  .color {
    color: #ff5733;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }

  .wave {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: ${wave};
    display: inline-block;
    transform-origin: 70% 70%;
  }

  @media (max-width: 720px) {
    text-align: left;
    width: 100%;
    margin: 2rem auto 1rem auto;

    h4 {
      padding-left: 1vw;
      text-align: left;
      font-size: 16px;
    }

    h1 {
      font-size: 44px;
      line-height: 1.2;
      text-align: left;
    }

    p {
      text-align: left;
      font-size: 26px;
      line-height: 1.4;
      letter-spacing: 0.2rem;
    }
  }
`

export const Right = styled.div`
  float: right;
  width: 55%;
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
`
