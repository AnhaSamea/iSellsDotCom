import React, { useState } from 'react';
import CategoryIdDetails from './CategoryIdDetails';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const CategoryId = () => {

    const models = useLoaderData();
    const [product,setProduct] = useState(null);

    return (
        <div className='text-center '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    models.models.map(model => <CategoryIdDetails key={model._id} model={model} setProduct={setProduct}></CategoryIdDetails>)
                }
            </div>
            <div>
            { product &&
                <BookingModal product={product}>
           
                </BookingModal>
            }
            </div>
        </div>
    );
};

export default CategoryId;