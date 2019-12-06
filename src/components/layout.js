import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"

import Navbar2 from "./Globals/Navbar2"
import Footer from "./Globals/Footer"
const Layout = ({ children }) => (
  <>
    <Navbar2 />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
