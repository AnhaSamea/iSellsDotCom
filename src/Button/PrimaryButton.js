import React from 'react';
import './Button.css'
const PrimaryButton = ({children}) => {
    return (
        <div>
           <button className='btn btn-bg-image text-white px-5 mt-4 lg:mt-0 py-3 rounded-md border block border-gray-400'>{children}</button> 
        </div>
    );
};

export default PrimaryButton;