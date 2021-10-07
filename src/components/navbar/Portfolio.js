import React, { Component,useEffect} from 'react';
import App from '../../App';
import Login from '../Logins/Login';
import 'bootstrap';
import './style.css'
import Aos from 'aos';
import { Link,NavLink } from 'react-router-dom';
function Portfolio(){
            useEffect(()=>{
      Aos.init();
    },[])
        return (
           <React.Fragment>
            <div className="">
                    <nav data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-anchor="bottom-top"
                     className="navbar navbar-expand-xl navbar-light navbar_nav">
                        <div className="container-fluid ">
                            <a className="navbar-brand mr-3" href={'App'}>Navbar</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5 ">
                                    <Link  to="" style={{textDecoration:"none"}}>
                                    <li className="nav-item mr-3 li  d-block justify-content-sm-center align-items-sm-center">
                                    <a className="nav-link  a" href=''>Home</a>
                                    </li>
                                    </Link>
                                     <Link  to='/Login' style={{textDecoration:"none"}}>
                                    <li className="nav-item mr-3 li d-block justify-content-sm-center align-items-sm-center">
                                    <a className="nav-link a" href="#Login">Login</a>
                                    </li>
                                    </Link>
                                    <Link to="/Course">
                                    <li className="nav-item mr-3 li d-block justify-content-sm-center align-items-sm-center">
                                    <a className="nav-link a " href="#">Course</a>
                                    </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>    
           </React.Fragment>
        );
}

export default Portfolio;

