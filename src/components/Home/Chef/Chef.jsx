import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("https://food-bu-zz-server.vercel.app/allChef")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChefs(data);
            });
    }, []);

    return (
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold text-center text-cyan-500 mb-8'>Popular Chef <br /> Of Our Community</h1>
            <div  className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 mb-12'>
                {chefs.map(chef => (
                    <div className="card card-side bg-base-100 shadow-xl o-4" key={chef.id}>
                        <figure><img className='w-72 h-60 p-4 rounded-full' src={chef.chefPicture} alt={chef.chefName} /></figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title text-2xl">{chef.chefName}</h2>
                            <p>Experience : {chef.yearsOfExperience} years</p>
                            <p>Number Of Recipes : {chef.numberOfRecipes}</p>
                            <p>Likes : {chef.likes}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/allChef/${chef.id}`}><button className="btn btn-primary">View Recipe</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chef;
