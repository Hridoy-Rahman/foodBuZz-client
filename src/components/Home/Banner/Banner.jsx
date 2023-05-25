import React from 'react';

const Banner = () => {
    return (

        <div data-aos="zoom-in-up" className="carousel w-full lg:h-[600px] mb-12 mt-12">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://i.ibb.co/XZcbNHF/banner.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-xl lg:text-6xl font-bold'>The only real stumbling block is fear of failure. In cooking, you've got to have a what-the-hell attitude.
                        </h2>
                        
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>

                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/SRV3dww/banner2.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-xl lg:text-6xl font-bold'>Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together</h2>
                        <p className="font-bold text-lg lg:text-2xl text-end">Guy Fieri</p>
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative  w-full">
                <img src="https://i.ibb.co/hHz3SNy/banner3.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 lg:w-1/2'>
                        <h2 className='text-2xl lg:text-6xl font-bold'>Cooking is like music. You combine different ingredients and flavors to create harmony on the plate</h2>
                        <div>
                            <button className="btn btn-primary mr-5">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;