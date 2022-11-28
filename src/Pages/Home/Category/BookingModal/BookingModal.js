import React from 'react';
import PrimaryButton from '../../../../Button/PrimaryButton';

const BookingModal = () => {
    return (
        <div>
            {/* modal */}

            <PrimaryButton><label htmlFor="my-modal-3">Book Now</label></PrimaryButton>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form action="" className='bg-slate-100 my-5 py-8 px-5 rounded-lg'>
                            <div>
                                <label for="name" className="block mb-1 ml-1 text-start">Name</label>
                                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            <div>
                                <label for="email" className="block mb-1 ml-1 text-start">Email</label>
                                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            <div>
                                <label for="name" className="block mb-1 ml-1 text-start">Password</label>
                                <input id="password" type="password" placeholder="password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            
                        </form>
                        <div className="modal-action">
                            <PrimaryButton><label htmlFor="my-modal">Submit</label></PrimaryButton>
                        </div>
                    </div>
                </div>

                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                    
                        <form action="" className='bg-slate-100 my-5 py-8 px-5 rounded-lg'>
                            <div>
                                <label for="name" className="block mb-1 ml-1 text-start">Name</label>
                                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            <div>
                                <label for="email" className="block mb-1 ml-1 text-start">Email</label>
                                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            <div>
                                <label for="name" className="block mb-1 ml-1 text-start">Password</label>
                                <input id="password" type="password" placeholder="password" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-700 bg-slate-200" />
                            </div>
                            
                        </form>
                        <div className="modal-action">
                            <PrimaryButton><label htmlFor="my-modal">Submit</label></PrimaryButton>
                        </div>
                    </div>
                </div> */}
                {/* The button to open modal */}
        </div>
    );
};

export default BookingModal;