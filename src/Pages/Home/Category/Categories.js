import React, { useEffect, useState } from 'react';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-8'>
            <p className='text-xl font-bold text-slate-800 pt-3'>Categories</p>
            <div className='grid sm:grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8 mx-auto'>

                {
                    categories.map(category => <CategoriesDetails key={category._id} category={category}></CategoriesDetails>)
                }


            </div>
        </div>
    );
};

export default Categories;