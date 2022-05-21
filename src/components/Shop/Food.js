import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../Shared/Navbar';

const Food = () => {
    let { idMeal } = useParams();
    console.log(idMeal);
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }, [])
    // console.log(foods);
    const matchFood = foods.filter(food => Number(food.idMeal) === Number(idMeal))
    // const matchFood = foods.filter(food => Number(food.idMeal) === Number(id))
    console.log(matchFood);




    return (
        <div>
            <Navbar></Navbar>
            <h1>Food Details</h1>
            <div class="card mb-3 container ">
                <img src={matchFood[0]?.strMealThumb} class="card-img-top " alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{matchFood[0]?.strMeal}</h5>
                    <p class="card-text">{matchFood[0]?.strInstructions}</p>

                </div>
            </div>

        </div>
    );
};

export default Food;