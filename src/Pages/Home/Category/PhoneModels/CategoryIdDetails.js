import React from 'react';


const CategoryIdDetails = ({ model,setProduct }) => {
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
               <label onClick={()=>setProduct(model)} htmlFor="my-modal-3" className='btn'>Book Now</label>

            </div>
        </div>

    );
};

export default CategoryIdDetails;