import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const ChefBanner = () => {
    const chef = useLoaderData()
    return (
        <div className="hero mt-12 mb-12 rounded-xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={`${chef.chefPicture}`} className="h-60 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl text-center font-bold">{chef.chefName}</h1>
                    <p className="py-6">{chef.bio}</p>
                    <div className='flex justify-between text-lg text-cyan-500'>
                        <p>Experience : {chef.yearsOfExperience} years</p>
                        <p>Recipies: {chef.numberOfRecipes}</p>
                        <p className='flex items-center gap-2'><FaHeart></FaHeart>{chef.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;