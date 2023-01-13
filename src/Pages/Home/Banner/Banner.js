import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/public-city-transport-isometric-flowchart-with-images-different-municipal-private-vehicles-with-text-captions_1284-27299.jpg?w=2000")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Easy Transport,Easy Life</h1>
                        <p className="mb-5">Bangladesh saw the completion of quite a few mega transport and communication projects in 2022, marking a revolution in the development of these sectors. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;