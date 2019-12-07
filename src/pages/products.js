import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Products from "../components/Home/Products"
const ProductPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Food" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Products Page"
        styleClass="about-background"
      />
      <Info />
      <Products />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "cbg1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ProductPage
