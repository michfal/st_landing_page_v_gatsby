
import * as React from "react"
import Hero from "./sections/hero/Hero.component"
import Offer from "./sections/offer/Offer.component"
import CourseStructure from "./sections/courseStructure/CourseStructure.component"
import ElementaryEgzam from "./sections/elementaryEgzam/ElementaryEgzam.components"
import Finals from "./sections/finals/Finals.component"
import Contests from "./sections/contests/Contest.component"
import CurrentMaterial from "./sections/currentMaterial/CurrentMaterial.component"
import Contact from "./sections/contact/Contact.components"
import Navbar from "./navbar/Navbar.component"

import "../style/main.scss"

const Layout = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <CourseStructure />
      <ElementaryEgzam />
      <Finals />
      <Contests />
      <CurrentMaterial />
      <Contact />

    </>
  )
}


export default Layout
