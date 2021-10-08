import React, { Fragment,useEffect } from "react";
import './css/Course.css';
import {Container,Row,Col,Image} from "react-bootstrap";
import ImageC from './images/c.png';
import ImageBootstrap from './images/csharp.png';
import ImageMysql from './images/mysql.png';
import ImageNode from './images/node-js.png';
import ImagePhp from './images/php.png';
import ImageWebpack from './images/webpack.png';
import ImageBack from './images/wave.png';
import Aos from 'aos';

function Course(props) {
                useEffect(()=>{
      Aos.init();
    },[])
    return (
        <Fragment>
        <div className="Containeres" id={props.Course}>
            <Container  className="_container"
            data-aos="fade-right"
             data-aos-anchor-placement="top-center"
              data-aos-offset="600"
               data-aos-easing="ease-in-sine"
                data-aos-duration="1100"
                 data-aos-anchor="bottom-top">
                <Row className="_row">
                    <Col xs={12} md={4}  className="_col">
                        <Image className="_images" 
                                src={ImageC}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"/>
                    </Col>
                    <Col xs={12} md={4} className="_col">
                        <Image className="_images" 
                                src={ImageBootstrap}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"
                                 />
                    </Col> 
                     <Col xs={12} md={4} className="_col">
                        <Image className="_images" 
                                src={ImageMysql}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"/>
                    </Col>
                    <Col xs={12} md={4} className="_col">
                        <Image className="_images" 
                                src={ImageNode}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"/>
                    </Col>
                    <Col xs={12} md={4} className="_col">
                        <Image className="_images" 
                                src={ImagePhp}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"/>
                    </Col>
                    <Col xs={12} md={4} className="_col">
                        <Image className="_images" 
                                src={ImageWebpack}
                                 roundedCircle 
                                 width="128px"
                                 height="128px"/>
                    </Col>
                </Row>
            </Container>
        </div>
        </Fragment>
    )
}

export default Course
