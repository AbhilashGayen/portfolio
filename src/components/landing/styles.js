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
  height: 100%;
  width: auto;
  margin: 0;
  padding: 0;
`

export const Div = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
    flex-direction: column;
    height: -webkit-fill-available;
  }
`

export const Left = styled.div`
  z-index: 2;
  float: left;
  width: 55%;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  h1 {
    padding-top: 0.5rem;
    display: inline-block;
    font-size: 68px;
    line-height: 1.2;
    font-family: "Raleway";
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: #22223b;
  }

  h4 {
    padding-left: 0.3vw;
    margin: 0;
    display: inline-block;
    font-size: 18px;
    font-family: "Raleway";
    color: #22223b;
    opacity: 0.8;
  }

  p {
    color: #242423;
    font-size: 36px;
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

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 0;
    width: 85%;
    h1 {
      font-size: 44px;
    }

    h4 {
      font-size: 16px;
    }
    p {
      font-size: 26px;
    }

    .line-break {
      width: 70%;
    }
  }
`

export const Right = styled.div`
  z-index: 1;
  float: right;
  width: 45%;
  height: auto;
  color: white;
  margin-top: 1rem;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    bottom: 10.5rem;
    left: 7rem;
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
