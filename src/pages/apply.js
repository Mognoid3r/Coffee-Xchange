import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import UserForm from "../components/Globals/UserForm"

const ProductPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Food" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Work @ Coffee Xchange"
        styleClass="about-background"
      />
      <UserForm />
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
