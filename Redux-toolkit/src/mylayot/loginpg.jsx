import React from 'react';
import './mystyle.css';
import {
    Link,
}from "react-router-dom";

function Loginpg(props) {
    return (
        <>
            {/* <img src="img/Bg-Image.png" alt="" /> */}
            <div className="container-fluid lg-pg">
                <div className="lg-content">
                    <div className="row logo">
                        <div className="col-12 ">
                        <img src="img/Logo.png" alt="Logo" className='mt-5 ' />
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-12 ">
                            <p>Donate blood, save life!</p>
                        </div>
                    </div>
                    <div className="row mybtn mt-4" >
                        
                        <div class="d-grid gap-2 col-2 col-xxl-3 col-xl-5 col-lg-5 col-md-8 col-sm-12  mx-auto">
                            <button class="btn" type="button">
                                Find A Donor
                                <span className='top'>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                            <button class="btn link-btn" type="button">
                                <Link className='Link-l' to={"/city"} >
                                    Blood Doner From
                                    <span className='bot'>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loginpg;