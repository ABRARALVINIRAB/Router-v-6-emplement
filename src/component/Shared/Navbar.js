import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from "../../images/mujiblogo.png"
import Banner from './Banner';




const Navbar = () => {
    return (
        <>

            <div >


                <nav class=" navbar navbar-expand-lg  navbar-dark bg-dark ">
                    <div class="container-fluid">
                        <a class="navbar-brand logo-container" href="#"><img src={logo} alt="" /></a>
                        <button class="navbar-toggler bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">


                            <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-white" href="#product-services">Products & Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-white" href="#client">Become a Client</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-white" href="#about">About Us</a>
                                </li>


                            </ul>

                            <div className="btn-container">
                                <div>
                                    <li class="nav-item btn">
                                        <button type="button" class="btn btn-success text-white">Login</button>
                                    </li>
                                </div>
                                <div>
                                    <li class="nav-item btn">
                                        <button type="button" class="btn btn-success text-white">Register</button>
                                    </li>
                                </div>
                            </div>


                        </div>
                    </div>
                </nav>



            </div>
            <Banner></Banner>
        </>
    );
};

export default Navbar;