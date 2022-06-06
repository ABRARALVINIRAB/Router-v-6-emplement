import React from 'react';
import ProductsServices from '../ProductsServices/ProductsServices';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <ProductsServices></ProductsServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;