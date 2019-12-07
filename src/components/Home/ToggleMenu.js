import React, { Component } from "react"
// import { StaticQuery, graphql } from "gatsby"

import Menu from "./Menu"
import Title from "../Globals/Title"
import FoodMenu from "./FoodMenu"

export default class ToggleMenu extends Component {
  state = {
    isToggled: false,
  }
  // handleMenuToggle = buttons => {
  //   if (buttons === "food") {
  //     this.setState(() => {
  //       return <FoodMenu />
  //     })
  //   } else if (buttons === "drinks") {
  //     this.setState(() => {
  //       return <Menu />
  //     })
  //   }
  // }

  render() {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Our menu's" />
          <div className="row">
            <div className="col-10 col-6 mx-auto text-center text-capitalize">
              <div>
                {this.state.isToggled ? <Menu items={data.menu} /> : null}
                <button
                  type="button"
                  key="drinks"
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => {
                    this.setState({ isToggled: true })
                  }}
                >
                  Drinks
                </button>
              </div>
              <div>
                {this.state.isToggled ? <FoodMenu items={data.food} /> : null}
                <button
                  type="button"
                  key="food"
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => {
                    this.setState({ isToggled: true })
                  }}
                >
                  Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// export const queries = graphql`
//   {
//     img: file(relativePath: { eq: "cbg1.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//     menu: allContentfulCoffeeItem {
//       edges {
//         node {
//           id
//           title
//           description {
//             description
//           }
//           price
//           category
//           image {
//             fixed(width: 50, height: 50) {
//               ...GatsbyContentfulFixed_tracedSVG
//             }
//           }
//         }
//       }
//     }
//     food: allContentfulFoodItem {
//       edges {
//         node {
//           id
//           title
//           description {
//             description
//           }
//           price
//           category
//           image {
//             fixed(width: 50, height: 50) {
//               ...GatsbyContentfulFixed_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
