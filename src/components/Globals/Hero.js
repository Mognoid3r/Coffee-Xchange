import React from 'react'
// import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
// import styled from 'styled-components';
import bgImg from '../../images/cbg2.jpg';
import '../hero.css';

const Hero = () => {

    return (
        
        <div className='header__section'>
            <div className='header__hero' style={{ backgroundImage: `url(${bgImg})` }} ></div>
            <div className='header__content'>
                <div className='header__info'>
                    <h1 className='header__title'>Coffee Xchange</h1>
                    <p className='header__subtitle'>Just one cup and you'll shit blood</p>
                    <p className='header__shortDescription'>Come in for some coffee and food <em>Stay for the experience</em></p>
                    <button className='btn__med'><Link to='/login/sign-in' className='btn__med'>Anal beads</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Hero;