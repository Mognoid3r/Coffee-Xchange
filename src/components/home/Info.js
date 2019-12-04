import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story" ></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5"> se equal casing. Compare these module identifiers:
* C:\Users\Holis\Desktop\practice\Coffee-Xchange\coffee\node_modules\webpack\buildin\harmony-module.js
    Used by 8 module(s), i. e.
    c:\Users\Holis\Desktop\practice\Coffee-Xchange\coffee\node_modules\gatsby\dist\utils\babel-loader.js??ref--4-0!c:\Users\Holis\Desktop\practice\Coffee-Xchange\coff
ee\node_modules\eslint-loader\index.js??ref--11-0!C:\Users\Holis\Desktop\practice\Coffee-Xchange\coffee\.cache\dev-404-page.js
* c:\Users\Holis\Desktop\practice\Coffee-Xchange\coffee\node_modules\webpack\buildin\harmony-module.js
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">About Page</button>
                        </Link>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Info;
