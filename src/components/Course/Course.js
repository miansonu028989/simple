import React, { Fragment } from "react";
import './css/Course.css';
import {Container,Row,Col,Image} from "react-bootstrap";
import ImageC from './images/c.png';
import ImageBootstrap from './images/csharp.png';
import ImageMysql from './images/mysql.png';
import ImageNode from './images/node-js.png';
import ImagePhp from './images/php.png';
import ImageWebpack from './images/webpack.png';

function Course() {
    return (
        <Fragment>
        <div className="Containeres">
            <Container  className="_container">
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
