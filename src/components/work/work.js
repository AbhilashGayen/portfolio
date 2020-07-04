import React from "react"
import FullProjectRow from "../../components/projectRow/full/FullProjectRow"
import HalfRow1 from "../../components/projectRow/half/HalfRow1"
import HalfRow2 from "../../components/projectRow/half/HalfRow2"
import ForwardLink from "../forwardLink"

const Work = () => {
  return (
    <>
      <FullProjectRow />
      <HalfRow1 />
      <HalfRow2 />
      <ForwardLink label="contact" navigate="/contact" />
    </>
  )
}

export default Work
