import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Details from "../components/Globals/Details"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="about us"
        styleClass="about-background"
      />
      {/* <Info /> */}
      {/* <Details /> */}
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
    # menu: allContentfulCoffeeItem {
    #   edges {
    #     node {
    #       id
    #       title
    #       description {
    #         description
    #       }
    #       price
    #       category
    #       image {
    #         fixed(width: 50, height: 50) {
    #           ...GatsbyContentfulFixed_tracedSVG
    #         }
    #       }
    #     }
    #   }
    # }
    # food: allContentfulFoodItem {
    #   edges {
    #     node {
    #       id
    #       title
    #       description {
    #         description
    #       }
    #       price
    #       category
    #       image {
    #         fixed(width: 50, height: 50) {
    #           ...GatsbyContentfulFixed_tracedSVG
    #         }
    #       }
    #     }
    #   }
    # }
  }
`

export default AboutPage
