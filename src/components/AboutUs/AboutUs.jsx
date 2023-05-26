import React from 'react';

const AboutUs = () => {
    return (

        <div>
            <h1 className='text-3xl text-center text-cyan-500 font-bold mt-24'>About Us</h1>
            <div className='flex flex-col lg:flex-row gap-4 mt-12 items-center'>
                <div className='w-full'>
                    <img className=' rounded-2xl p-4' src="https://i.ibb.co/5T5NTnt/22.jpg" alt="" />
                </div>
                <div className='p-4'>
                    <p className='text-xl'>At <span className='text-3xl font-bold'>FoodBuZz</span> , we are passionate about creating culinary experiences that delight and inspire. We believe that food has the power to bring people together, and we strive to help you explore the world of cooking and enhance your skills in the kitchen.</p>
                    <p className='text-xl'>Our team of talented chefs and food enthusiasts are dedicated to curating the finest collection of recipes, ranging from traditional classics to innovative and creative dishes. We understand that everyone has different tastes and dietary preferences, which is why we offer a diverse range of recipes suitable for various culinary needs.</p>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;