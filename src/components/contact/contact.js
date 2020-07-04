import React, { useState } from "react"
import { Background, Div, H1, StyledAnchor } from "./styles.js"

var i = 0
var j = 0
const email = "abhilashgayen"
const tenant = "@gmail.com"
var speed = 200
var value = false

function typeEmail() {
  if (value) {
    if (i < email.length) {
      document.getElementById("emailName").innerHTML += email.charAt(i)
      i++
      setTimeout(typeEmail, speed)
    } else if (i >= email.length) {
      typeTenant()
    }
  }
}

function typeTenant() {
  if (value) {
    if (j < tenant.length) {
      document.getElementById("tenantName").innerHTML += tenant.charAt(j)
      j++
      setTimeout(typeTenant, speed)
    }
  }
}

class Contact extends React.Component {
  componentDidMount() {
    value = true
    typeEmail()
  }

  componentWillUnmount() {
    value = false
    i = 0
    j = 0
  }

  render() {
    return (
      <Background>
        <Div>
          <StyledAnchor>
            <h1 id="emailName"></h1>
            <h1 className="tenant-style" id="tenantName"></h1>
          </StyledAnchor>
        </Div>
      </Background>
    )
  }
}

export default Contact
