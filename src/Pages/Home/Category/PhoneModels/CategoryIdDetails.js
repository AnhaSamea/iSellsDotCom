import React from 'react';

const CategoryIdDetails = ({ model }) => {
    const { picture, name, location, resale_price, } = model;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <p>Click the button to listen on Spotiwhy app.</p>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryIdDetails;