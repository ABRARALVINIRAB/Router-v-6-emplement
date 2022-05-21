import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Foods from './Foods';
import "./Shop.css"

const Shop = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div id="foods" className='container'>

                {
                    foods.map(food => (
                        <Foods food={food} ></Foods>
                    ))
                }
            </div>
        </>
    );
};

export default Shop;