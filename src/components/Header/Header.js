//#region Import
import React, { Component, Fragment,useEffect} from 'react';
import 'bootstrap';
import './header.css';
import Portfolio from '../navbar/Portfolio';
import Aos from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare,FaGooglePlusSquare, FaPinterestSquare } from "react-icons/fa";

//#endregion Import
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
                                data-aos="fade-right"
                                 data-aos-anchor-placement="top-center"
                                  data-aos-offset="200"
                                   data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000"
                                     data-aos-anchor="bottom-top">
                                        Welcome to <span className="span">Portfolio</span>
                                </h2>
                        </div>
                </header>
                <Container fluid={true} className="_Containers">
                        <Row className="_Row">
                                <Col className="_Col">
                                <a href="#"><FaFacebookSquare className="fonticon"/></a>
                                </Col>
                                <Col className="_Col">
                                <a href="#"><FaGooglePlusSquare className="fonticon"/></a>
                                </Col>
                                <Col className="_Col">
                                <a href="#"><FaPinterestSquare className="fonticon"/></a>
                                </Col>
                        </Row>
                </Container>
            </Fragment>
        );

}

export default Header;

