import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Coffee Xchange"
        styleClass="default-background"
      >
        <p>lorem asdoifmsdofimasdof asdofiasd foiamsd </p>
        <button btn-white>
          <a href="tel:+1-520-751-4739" className="btn text-uppercase">
            Call & Order
          </a>
        </button>
      </BackgroundSection>
      <Info />
      <Menu items={data.menu} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "cbg2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
