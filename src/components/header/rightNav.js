import React from "react"
import { Link } from "gatsby"
import { Ul } from "./styles.js"

const RightNav = ({ open, onClick }) => {
  return (
    <Ul open={open} onClick={() => onClick(!open)}>
      <li>
        <Link className="link" exact to="/" activeClassName="active-link">
          Home
        </Link>
      </li>
      <li>
        <Link exact className="link" to="/about" activeClassName="active-link">
          About
        </Link>
      </li>
      <li>
        <Link className="link" exact to="/work" activeClassName="active-link">
          Work
        </Link>
      </li>
      <li>
        <Link
          className="link"
          exact
          to="/contact"
          activeClassName="active-link"
        >
          Contact
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav
