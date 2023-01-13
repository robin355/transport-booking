import React from 'react';

const Cetagorie = ({ product }) => {
    const { image, name, Description } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[400px] h-[300px] rounded' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-start text-secondary text-2xl font-bold">{name}</h2>
                    <p className='text-start'>{Description.slice(0, 70)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">All {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cetagorie;