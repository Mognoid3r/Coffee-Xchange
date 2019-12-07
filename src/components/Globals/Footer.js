import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <footer className="footer py-3">
        <div className="container">
          <div className="row">
            <div className="first-panel col-md-4 col-sm-6">
              <h4>Coffee Xchange</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="3906, 6841 N Camino Principal, Tucson, AZ 85715">
                    3906, 6841 N Camino Principal, Tucson, AZ 85715
                  </a>
                </li>
                <li>
                  <a href="+15207514739">(520) 751-4739</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/products/">PRODUCTS</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/apply/">APPLY</Link>
                </li>
                <li>
                  <Link to="/contact/">CONTACT</Link>
                </li>
              </ul>
            </div>

            <div className="col text-center mb-3">
              <div className="copywrite text-capitalize font-weight-bold">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Coffee Xchange - All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  .first-panel {
    color: #ece8dc;
  }

  .copywrite {
    color: #ff9e09;
  }
  .footer-middle {
    padding-top: 3rem;
    color: #ece8dc;
  }

  .list-unstyled {
    letter-spacing: 1px;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: #ece8dc;
  }

  ul li a:hover {
    text-decoration: none;
    color: #ff9e09;
  }
`
