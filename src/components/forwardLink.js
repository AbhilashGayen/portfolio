import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../components/Media"
import arrow from "../images/arrow.svg"

const Div = styled.div`
  width: 90%;
  height: auto;
  overflow: hidden;
  margin: auto;
  padding: auto 5rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 100%;
    padding: 0;
  }
`

const Button = styled.button`
  background-color: transparent;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #000;
  font-size: 1rem;
  padding: 1rem;
  width: 120px;
  transition: all 0.5s;
  margin: 0.1rem;
  border: none;
  font-family: "Katwijk";
  outline: none;
  box-shadow: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobileMax}) {
    width: 60px;
  }

  img {
    margin: 10px;
  }

  :after {
    content: ${props => `'${props.label}'`};
    position: absolute;
    opacity: 0;
    right: -15px;
    transition: 0.5s;
    @media (max-width: ${breakpoints.mobileMax}) {
      opacity: 1;
      top: 22px;
      right: 43px;
    }
  }

  :hover {
    padding-right: 20px;
    padding-left: 8px;
  }

  :hover:after {
    opacity: 1;
    right: 110px;
  }
`

const ForwardLink = ({ label, navigate }) => {
  return (
    <Div>
      <Link className="link" to={navigate}>
        <Button label={label}>
          <img src={arrow} alt="alt" />
        </Button>
      </Link>
    </Div>
  )
}

export default ForwardLink
