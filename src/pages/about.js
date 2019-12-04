import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from '../components/Globals/Hero';
// import Info from '../components/home/Info';
// import BackgroundSection from "../components/Globals/BackgroundSection";
// import { FaGulp } from "react-icons/fa";

const AboutPage = ({data}) => (
  <Layout>
    <SEO 
    title="About" 
    keywords={[`gatsby`, `application`, `react`]} 
    />
    <Hero />
    {/* <Info />  */}
    {/* <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="About Us" 
    styleClass="about-background" /> */}
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
//   }`


export default AboutPage