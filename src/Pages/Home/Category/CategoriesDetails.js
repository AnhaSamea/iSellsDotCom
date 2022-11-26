import React from 'react';
import { Link} from 'react-router-dom';

const CategoriesDetails = ({category}) => {
    const {_id,title} = category;
    return (
        
        <Link to={`/categories/${_id}`}>
            <div className='w-full py-8 px-5  shadow-md lg:max-w-lg rounded-xl shadow-neutral-xl text-slate-800 bg-slate-200'>
                <div className='flex justify-around'>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">
                        {title}
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
       
    );
};

export default CategoriesDetails;