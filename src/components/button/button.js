import React from "react"
import "./button.sass"

const Button = () => (
  <a
    href="https://drive.google.com/file/d/1xookLIeb3ezYXPCz7Py745MV_pnqcPxb/view?usp=sharing"
    className="cta"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>Resume</span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </a>
)

export default Button
