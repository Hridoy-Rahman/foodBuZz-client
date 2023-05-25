import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    const chefRecipies = useLoaderData()
    console.log(chefRecipies)
    return (
        <div>
            <div>
                <ChefBanner></ChefBanner>
            </div>
            <div>

                <div className="recipe-card" key={chefRecipies.id}>
                    <h2 className="recipe-title">Name : {chefRecipies.chefName}</h2>
                    <p className="recipe-ingredients">Ingredients: {chefRecipies.ingredients}</p>
                    <p className="recipe-cooking-method">Cooking Method: {chefRecipies.cookingMethod}</p>
                    <p className="recipe-rating">Rating: {chefRecipies.rating}</p>
                    <button className="btn btn-primary">Favorite</button>
                </div>
            </div>
        </div>

    );
};

export default Recipies;
