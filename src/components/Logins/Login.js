import './css/Login.css'
import React, {useEffect} from 'react';
import image from '../images/Login.png';
import { Fragment } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
function Login() {
        useEffect(()=>{
      Aos.init();
    },[])
        return (
            <Fragment>
                <div className="form" id="Login">
                   <div className="card mb-3 cards">
                        <div className="row g-0">
                            <div data-aos-duration="1000" data-aos="fade-right" className="col-md-4 col-sm-12">
                                <img src={image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div data-aos-duration="900" className="col-md-8 col-sm-12">
                                <div data-aos="fade-right" className="card-body align-items-center cbody">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-12 col-sm-12 mb-2 mt-3">
                                            <label className="label">Username</label>
                                            <input type="text" placeholder="Enter Username"
                                             className="ml-3 input"/>
                                        </div>   
                                        <div className="col-12 col-md-12 col-sm-12 mb-3 mt-2">
                                            <label className="label">Password</label>
                                            <input type="password" placeholder="Enter password"
                                             className="ml-3 input"/>
                                        </div>
                                        <div className="col-12 col-md-12 col-sm-12 mb-3 mt-3 text-center">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                        <div className="forget mb-3 mt-3 text-center">
                                            <Link to="" style={{textDecoration:"none"}} className="forgetLink">Forget Password ?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
}

export default Login;
