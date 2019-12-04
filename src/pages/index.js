import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/Globals/Hero';
import Info from '../components/home/Info';
import BackgroundSection from "../components/Globals/BackgroundSection";

const IndexPage = ({data}) => (
  <Layout>
    <SEO 
    title="Home" 
    keywords={[`gatsby`, `application`, `react`]} 
    />
    <Hero />
    <Info />
    {/* <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffee Xchange" styleClass="default-background" /> */}
  </Layout>
);

// export const query = graphql`{
//     img:file(relativePath:{eq:"cbg2.jpg"}) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     menu:allContentfulCoffeeItem{
//     edges{
//       node{
//         id
//         title
//         description{
//           description
//         }
//         price
//         category
//         image{
//           fixed(width:50,height:50){
//             ...GatsbyContentfulFixed_tracedSVG
//           }
//         }
//       }
//     }
//   }
//   }`


export default IndexPage

