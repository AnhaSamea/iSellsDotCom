import React from 'react';
import CategoryIdDetails from './CategoryIdDetails';
import { useLoaderData } from 'react-router-dom';

const CategoryId = () => {

    const models = useLoaderData();

    return (
        <div className='text-center '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    models.models.map(model => <CategoryIdDetails key={model._id} model={model}></CategoryIdDetails>)
                }
            </div>
        </div>
    );
};

export default CategoryId;