import React from 'react';

const TopRatedFood = () => {
    return (
        <div className=' mt-12'>
            <h1 className='text-2xl lg:text-5xl font-bold text-cyan-500 text-center mt-12'>Our Most Popular Recipe</h1>
            <div className="flex flex-col lg:flex-row items-center gap-4 bg-base-100 rounded-2xl mt-12 mb-12 shadow-xl p-8" >
                <figure>
                    <img className="w-96 h-60 rounded-xl" src="https://i.ibb.co/x37N7jL/21.jpg" alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-yellow-700">Mutton Biriyani</h2>
                    <p className="text-lg text-cyan-400">Ingredients: Basmati rice,
                        Mutton,
                        Yogurt,
                        Spices,
                        Onion,
                        Tomato,
                        Ginger,
                        Garlic,
                        Mint leaves,
                        Coriander leaves,
                        Ghee,
                        Saffron,
                        Milk</p>
                    <p>Cooking Method : 1. Marinate the mutton with yogurt, spices, ginger, garlic paste, and keep it aside for 1-2 hours. Cook the basmati rice separately. In a large pan, heat ghee and sauté sliced onions until golden brown. Remove half of the fried onions and keep them aside for garnishing. Add marinated mutton to the pan and cook until it becomes tender. Layer the cooked rice over the mutton, sprinkle saffron-soaked milk, and garnish with fried onions, mint leaves, and coriander leaves. Cover the pan tightly with a lid and cook on low heat for about 20-25 minutes until the flavors meld together. Serve hot with raita or salad.</p>
                    <h2 className='text-lg font-bold'>Rating: 5</h2>
                </div>
            </div>
        </div>
    );
};

export default TopRatedFood;