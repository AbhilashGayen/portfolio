import React from "react"
import Burger from "./burger"
import { Link } from "gatsby"
import { Nav, Logo, Image } from "./styles.js"
import logo from "../../images/logo.svg"

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <Image src={logo} width="120px" alt="logo" />
        </Logo>
      </Link>
      <Burger />
    </Nav>
  )
}

export default Header
