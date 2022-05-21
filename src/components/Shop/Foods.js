import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    // console.log(food);
    const { strMealThumb, idMeal, strMeal, strInstructions } = food;
    // console.log(idMeal);
    return (
        <div  >

            <div class="card" >
                <img src={strMealThumb} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{strMeal}</h5>
                    <p class="card-text">{strInstructions.slice(0, 100)}</p>
                    <Link to={`/food/${idMeal}`}> <button>Details</button> </Link>
                </div>
            </div>



        </div>
    );
};

export default Foods;