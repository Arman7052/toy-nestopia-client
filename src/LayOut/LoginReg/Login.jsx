import { Link } from "react-router-dom";

import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
         
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

                                        <input type="text" placeholder="Email" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control py-2">

                                        <input type="text" placeholder="Password" className="input input-bordered" required/>

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
                            <div className=" py-5 flex justify-between gap-4 text-2xl">
                                <div><button><FaGoogle></FaGoogle></button></div>
                                <div><button><FaGithub></FaGithub></button></div>
                            </div>
                        </div>
                    </div>
                </div>
          
        </>
    );
};

export default Login;