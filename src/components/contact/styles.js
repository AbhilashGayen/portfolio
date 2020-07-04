import styled, { keyframes } from "styled-components"

const typing = keyframes`
from { width: 0 }
to { width: 85% }
`

export const Background = styled.div`
  background: linear-gradient(45deg, rgb(38, 44, 65) 0%, rgb(70, 80, 122) 100%);
  display: flex;
  height: 100vh;
  margin-bottom: 15vh;
  align-items: center;
  @media(max-width: 720px){
    margin-bottom: 10vh;
  }
`

export const Div = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  animation: ${typing} 3s steps(25, end);
  transition: font-weight 250ms linear, font-stretch 250ms linear;
`

export const StyledAnchor = styled.a`
  display: inline-flex;
  font-family: "Gingham Variable", BlinkMacSystemFont, sans-serif;
  font-size: 7vw;
  color: #ff8c00;
  padding-bottom: 2rem;
  text-shadow: -1px -1px 0 #6e1f58, 1px -1px 0 #6e1f58, -1px 1px 0 #6e1f58,
    1px 1px 0 #6e1f58, 1px 0px 0px #ff0080, 0px 1px 0px #ff0080,
    2px 1px 0px #ff0080, 1px 2px 0px #ff0080, 3px 2px 0px #ff0080,
    2px 3px 0px #ff0080, 4px 3px 0px #ff0080, 3px 4px 0px #ff0080,
    5px 4px 0px #ff0080, 3px 5px 0px #6e1f58;

  @media (max-width: 720px) {
    text-shadow: -1px -1px 0 #6e1f58, 1px -1px 0 #6e1f58, -1px 1px 0 #6e1f58,
      1px 1px 0 #6e1f58, 1px 0px 0px #ff0080;
  }

  span {
    margin: 0;
    padding: 30px 0;
    font-size: 7vw;
    font-weight: 700;
    font-stretch: 150%;
  }

  .tenant-style {
    margin: 0;
    padding: 30px 0;
    font: 0;
    font-weight: 300;
    font-stretch: 1%;
    transition: all 250ms ease-out;
  }

  :hover {
    span {
      font-weight: 300;
      font-stretch: 1%;
    }

    .tenant-style {
      font-weight: 700;
      font-stretch: 150%;
    }
  }
`
