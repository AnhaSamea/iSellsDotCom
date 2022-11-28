import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const CategoryIdDetails = ({ model }) => {
    const { picture, name, location, resalePrice,originalPrice,yearsofUse } = model;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
               <div className='font-medium'>
               <p className='text-slate-500 '><small> &#127968; {location}</small></p>
                <p>Resale Price : <strong className='text-4xl text-purple-600'>{resalePrice}</strong></p>
                <p>Original Price :  {originalPrice}</p>
                <p><small>Used for :  {yearsofUse}</small></p>
               </div>
                <BookingModal></BookingModal>
            </div>
        </div>

    );
};

export default CategoryIdDetails;