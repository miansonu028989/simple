import React, { Fragment,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './css/Footer.css';
import Aos from 'aos';

function Footers() {
            useEffect(()=>{
      Aos.init();
    },[])
    return (
        <Fragment>
            <Container fluid className="__container"                               
             data-aos="fade-right"
                                 data-aos-anchor-placement="top-center"
                                  data-aos-offset="600"
                                   data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000"
                                     data-aos-anchor="bottom-top">
                <Row>
                    <Col sx={12} md={12}>
                        <p class="copyright-text _p">
                        Copyright &copy; 2021 All Rights Reserved by 
                        <a style={{textDecoration:"none"}} href="" className="_a">Portfolio</a>.
                        </p>
                        
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Footers
