import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// const Div = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
  /* button */

  .link {
    font-family: "Katwijk";
    background-color: transparent;
    font-size: 28px;
    letter-spacing: 2px;
    color: #295c91;
    position: relative;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 0;
    padding-left: 20px;
    left: 0;
    line-height: auto;
    overflow: hidden;

    /*line*/
    &:before {
      content: "";
      background-color: #ff5733;
      width: 3px;
      height: 100%;
      position: absolute;
      z-index: 2;
      left: 0px;
      top: 0px;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
    }
    /*arrow*/
    &:after {
      content: "";
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      background-color: transparent;
      position: absolute;
      border: solid 3px #ff5733;
      border-left: 0;
      border-bottom: 0;
      top: calc(50% - 9px);
      border-radius: 2px;
      transform: translateX(-42px) rotate(45deg);
      transition: all 0.3s 0.2s ease-in-out;
    }
  }
  /* bg button */
  &:before {
    content: "";
    background: rgb(254, 254, 254);
    background: linear-gradient(
      90deg,
      rgba(254, 254, 254, 1) 0%,
      rgba(255, 208, 6, 1) 100%
    );
    width: 0;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0px;
    border-radius: 3px;
    transition: all 0.2s 0.4s ease-in-out;
  }
  &:hover {
    &:before {
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0px;
    }

    .link {
      padding-left: 50px;

      &:before {
        left: 17px;

        transform: rotate(90deg);
      }

      &:after {
        transform: translate(-33px) rotate(45deg);
      }
    }
  }
`

const ForwardLink = ({ label, navigate }) => {
  return (
    <Link to={navigate}>
      <Button>
        <div className="link">{label}</div>
      </Button>
    </Link>
  )
}

export default ForwardLink
