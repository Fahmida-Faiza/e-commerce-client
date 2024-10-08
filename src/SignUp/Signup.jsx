import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
               
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-3xl text-center font-bold">SignUp </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirmed Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className=' text-center font bold '>Already Have an account <Link className='text-orange-600' to="/login" >Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;