import { Link } from "react-router-dom";

import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { logIn, signInWithGoogle } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error))

    }

    return (
        <>


            <h1 className="text-5xl font-bold text-center py-5">Login Now!</h1>

            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control py-2">

                                    <input type="text" placeholder="Email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control py-2">

                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control py-2 mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="text-center lg:text-left">

                                <p className="py-6">New to <span className=" text-violet-500">Toy Nestopia? </span> <br /> <Link to='/register' className=" underline underline-offset-8">Register Here</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">
                        <h1 className=" text-xl"> Try with</h1>
                        <div className=" py-5 text-2xl">
                            <div className=''>
                                <button onClick={signInWithGoogle} className=" btn lg:btn-wide btn-outline btn-error"><span className=' mr-2'><FaGoogle></FaGoogle> </span> Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;