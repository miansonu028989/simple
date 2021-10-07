import React, { Component, Fragment,useEffect} from 'react';
import 'bootstrap';
import './header.css';
import Portfolio from '../navbar/Portfolio';
import Aos from 'aos';
function Header (){
        useEffect(()=>{
      Aos.init();
    },[])
    return (
            <Fragment>
                <Portfolio />
                <header className="header">
                        <div className="container headerText">
                                <h2 className="text-center container text"
                                data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-anchor="bottom-top">
                                        Welcome to <span className="span">Portfolio</span>
                                </h2>
                        </div>
                </header>
            </Fragment>
        );

}

export default Header;

