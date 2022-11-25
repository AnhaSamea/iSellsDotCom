import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../context/AuthProvider';

const Register = () => {

    const{loading,createUser,signInWithGoogle} = useContext(AuthContext);

    const handleRegister = event=>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
    }


    return (
        <div className='flex justify-center my-12'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block text-gray-800">Email</label>
                        <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-slate-200 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-800">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-slate-200 focus:dark:border-violet-400" />
                        {/* <div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div> */}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-slate-800">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-500">Or</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-slate-400 focus:ring-slate-600 text-xl ">
                        <FcGoogle className="w-7 h-7 fill-current"></FcGoogle>
                        <p>Sign Up with Google</p>
                    </button>
                </div>
                <p className="text-md text-center sm:px-6 text-gray-600">Already have an account?
                    <Link rel="noopener noreferrer" href="#" className="underline text-cyan-500 px-2">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;