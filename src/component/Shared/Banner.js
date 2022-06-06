import React from 'react';
import "./Banner.css";
import banner1 from "../../images/b1.jpg"
import banner2 from "../../images/b2.jpg"
import banner3 from "../../images/b3.jpg"

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active carousel-container">
                        <div class="card-container">

                            <img src={banner3} alt="" />

                            <div class="title">
                                <h1 class="text-">মুজিববর্ষের অঙ্গীকার <br />উন্নয়ন-অর্থায়নের উৎস হবে পুঁজিবাজার" </h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-container">
                        <div class="card-container">

                            <img src={banner2} alt="" />

                            <div class="title">
                                <h1 class="text-">মুজিববর্ষের অঙ্গীকার <br />উন্নয়ন-অর্থায়নের উৎস হবে পুঁজিবাজার" </h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item carousel-container">
                        <div class="card-container">

                            <img src={banner1} alt="" />

                            <div class="title">
                                <h1 class="text-">মুজিববর্ষের অঙ্গীকার <br />উন্নয়ন-অর্থায়নের উৎস হবে পুঁজিবাজার" </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;