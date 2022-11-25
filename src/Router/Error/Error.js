import React from 'react';
import gif from '../../assets/images/404-page-animation.gif'
const Error = () => {
    return (
        <div className='flex justify-center'>
            <img className='w-full h-full lg:fixed' src={gif} alt="" />
        </div>
    );
};

export default Error;