import React from 'react';
import logo from "../../images/mujiblogo.png"
import about from "../../images/about.png"
import product from "../../images/product.jpg";
import client from "../../images/client.jpg";
import download from "../../images/download2jpg.jpg";
import research from "../../images/research.jpg"
import "./ProductsService.css";
const ProductsServices = () => {
    return (
        <div>
            <div class="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12 ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12 p-2 ">

                        <h1 class="text-success">"মুজিববর্ষের অঙ্গীকার <br />উন্নয়ন-অর্থায়নের উৎস হবে পুঁজিবাজার" </h1>

                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div id='about' class="col-sm-12 col-md-3 mt-4 ">
                        <div className="img-div">
                            <img src={about} alt="" />

                        </div>
                        <div className="item-div mt-5 ">
                            <p className='about-element-text'><span className='span-arrow'>▸</span> Capital Profile</p> <br />
                            <p><span className='span-arrow'>▸</span> Mission & Vision</p>
                            <p className='about-element-text'><span className='span-arrow'>▸</span> Board of Director</p> <br />
                            <p><span className='span-arrow'>▸</span> Management Role</p>
                            <p className='about-element-text'><span className='span-arrow'>▸</span> Circulation Path</p> <br />
                            <p><span className='span-arrow'>▸</span> Careear Path</p>
                            <p><span className='span-arrow'>▸</span> Contact Us</p>

                        </div>
                    </div>
                    <div id='product-services' class="col-sm-12 col-md-3 mt-5">
                        <div className="img-div">
                            <img src={product} alt="" />
                        </div>
                        <div >
                            <p><span className='span-arrow'>▸</span> Issue Management</p>
                            <div className="product-element">
                                <h5>Corpotech Industries Limited</h5>
                                <p> <span className='span-sign'>➡</span> <a href="#"> Prospectus</a> </p>
                                <p> <span className='span-sign'>➡</span> <a href="#"> Abridged Version</a> </p>
                                <h5>Oimex Electrode Limited</h5>
                                <p> <span className='span-sign'>➡</span> <a href="#"> Prospectus</a> </p>
                                <p> <span className='span-sign'>➡</span> <a href="#"> IPO Application Process</a> </p>
                                <p> <span className='span-sign'>➡</span> <a href="#"> IPO Result</a> </p>
                                <h5>Zaheen Spinning Ltd.</h5>
                            </div>

                        </div>


                    </div>
                    <div id='client' class="col-sm-12 col-md-3 mt-5">
                        <div className="img-div">
                            <img src={client} alt="" />
                        </div>
                        <div className="client-eliment mt-2">
                            <p className='about-element-text'><span className='span-arrow'>▸</span> Bangladeshi Individuals</p>
                            <p><span className='span-arrow'>▸</span> Bangladeshi Institutions</p>
                            <p className='about-element-text'><span className='span-arrow'>▸</span> NRBS</p>
                            <p><span className='span-arrow'>▸</span> Foreign Investors</p>
                            <div className="research-div">
                                <img src={research} alt="" />
                            </div>
                            <p><span className='span-arrow'>▸</span> Daily market comentory</p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 mt-5">
                        <div className="img-div">
                            <img src={download} alt="" />
                        </div>
                        <div className="doenload-item">
                            <h5>Forms</h5>
                            <p><span className='span-arrow forms'>▸</span> <br /> 
                            All Forms</p>
                            <h5>Notice/Circular</h5>
                            <p><span className='span-arrow forms'>▸</span> <br /> 
                            BSEC</p>
                            <button className='btn-online mb-3'><span className='color-online'>Online</span> <span className='color-trading'>Trading</span></button><br />
                            <button className='btn-online'><span className='color-online'>IPO</span> <span className='color-trading'>Results</span></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductsServices;