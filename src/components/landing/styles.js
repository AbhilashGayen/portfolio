import styled, { keyframes } from "styled-components"
import landing from "../../images/landing1.svg"

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
  height: 100vh;
  width: auto;
  margin: 0;
  padding: 0;
  background: white;
  background-image: url(${landing});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 100% 100%;
  background-size: 50% 90%;

  @media (max-width: 1200px) {
    background-size: 25%;
    background-position: 90% 100%;
  }

  @media (max-width: 720px) {
    background-size: 90%;
    background-position: 115px 300px;
  }
`

export const Div = styled.div`
  width: 90%;
  height: auto;
  overflow: hidden;
  margin: auto;
  padding: auto 5rem;
  display: flex;
  align-content: center;

  @media (max-width: 720px) {
    width: 90%;
    padding: 0;
    flex-direction: column;
  }
`

export const Left = styled.div`
  position: fixed;
  top: 30%;
  left: 15%;
  width: 80%;
  height: auto;
  margin: auto;

  h1 {
    padding-top: 0.5rem;
    display: inline-block;
    font-size: 68px;
    line-height: 1.1;
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

  @media (max-width: 959px) {
    position: absolute;
    top: 2%;
    left: 5%;

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
  width: 50%;
  height: auto;
  color: white;
  margin-top: 1rem;

  img {
    object-fit: cover;
    height: 90%;
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
