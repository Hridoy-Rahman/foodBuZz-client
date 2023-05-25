import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChefBanner from '../ChefBanner/ChefBanner';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';



const Recipes = () => {

    const chefRecipies=useLoaderData()
  const [recipes, setRecipes] = useState(chefRecipies.recipes || []);

  const handleFavorite = (recipeId) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        recipe.isFavorite = !recipe.isFavorite;
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
    if (updatedRecipes.find((recipe) => recipe.id === recipeId)?.isFavorite) {
        Swal.fire({
          icon: 'success',
          title: 'Recipe added to favorites!',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Recipe removed from favorites!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    
  };

  return (
    <div>
      <div>
        <ChefBanner />
      </div>
      <div>
        <h1 className="text-center text-3xl text-cyan-500 font-bold mb-8">
          All Recipes of {chefRecipies.chefName}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 mb-12">
          {recipes.map((recipe) => (
            <div className="flex flex-col lg:flex-row items-center gap-4 bg-base-100 shadow-xl p-8" key={recipe.id}>
              <figure>
                <img className="h-48 w-96 rounded-xl" src={recipe.img} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-yellow-700">{recipe.recipeName}</h2>
                <p className="text-lg text-cyan-400">Ingredients: {recipe.ingredients.join(', ')}</p>
                <p>Cooking Method: {recipe.cookingMethod}</p>
                <p>Rating: {recipe.rating}</p>
                {!recipe.isFavorite && (
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleFavorite(recipe.id)}>
                      <FaRegHeart  />
                    </button>
                  </div>
                )}
                {recipe.isFavorite && (
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleFavorite(recipe.id)}>
                      <FaHeart/>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
