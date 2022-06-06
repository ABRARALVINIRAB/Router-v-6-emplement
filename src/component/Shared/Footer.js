import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"
import logo from "../../images/mujiblogo.png"

const Footer = () => {
    return (
        <>



            <Row className="colour">
                <Col sm>
                    <img src={logo} alt="" />
                    
                </Col>
                <Col sm>
                    <h1 className="text-color">Call Center Numbers</h1>
                    <h1 className="text-color"><i className="icon-color" class="fas fa-phone-square-alt"></i> 1653</h1>
                    <h1 className="text-color"><i className="text-color" class="fas fa-mobile-alt"></i> 01742916158</h1>
                </Col>
                <Col sm>
                    <h1 className="text-color">Make a Appointment</h1>
                    <Link className="link" to="#"><button>Click here</button></Link>
                    <h2 className="text-color">Location</h2>
                    <p className="text-color"> <i class="fas fa-map-marker"></i> Bajitpur,kishoregonj</p>

                </Col>
            </Row>


        </>
    );
};

export default Footer;