import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="p-6 py-12 mt-5 rounded-lg banner-bg text-white">
        {/* <div className="p-6 py-12 mt-5 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"> */}
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to 
				<br className="sm:hidden"/> 50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">iSELLS50</span>
			</div>
			<Link href="#" rel="noreferrer noopener" className=''><button className='btn px-5 mt-4 lg:mt-0 py-3 rounded-md border block btn-bg text-slate-700 border-gray-400'>Shop Now</button></Link>
		</div>
	</div>
</div>
    );
};

export default Banner;