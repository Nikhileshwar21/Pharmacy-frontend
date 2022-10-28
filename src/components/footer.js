import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer_area" >
            <div className="footer_row">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-30">
                            <div className="footer_logo">
                                 <NavLink className="footer_logo" to="/"><span> <span className="foot_logo"><h4></h4></span></span></NavLink>
                            </div>
                            <div className="footer_para">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
                        <div className="single-footer-caption mb-30">
                        <div className="footer_title">
                           
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <div className="single-footer-caption mb-30" style={{backgroundColor:"white"}}>
                        <div className="footer_title">
                            <h4>Contact us</h4>
                            <ul>
                                <li>Tel:+919483740767</li>
                                <li>Nikhileshwar@gmail.com</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                            
                    
                </div>
            </div>
        </div>
        </footer>
        </>
    );
};

export default Footer;