import React from "react"
import Title from "../Globals/Title"
import { Link } from "gatsby"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Coffee X Change was founded by a University of Arizona Graduate,
              and now is proudly operated by two generations of U of A Alumni.
              We are proud to be the only Retail-Roaster in Tucson to offer
              coffee from various regions around the world to our guests since
              1996. We have always thrived on providing the best coffee
              available as we purchase the highest quality green coffee beans
              from the fair trade market. Our coffee is roasted daily right here
              in Tucson to ensure the best quality and freshness.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
