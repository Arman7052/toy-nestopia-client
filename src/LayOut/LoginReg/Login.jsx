import { Link } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";

const Login = () => {
    return (
        <>
            <Navbar></Navbar>

            <h1 className="text-5xl font-bold text-center py-5">Login Now!</h1>
            <div className="hero min-h-screen bg-base-200 rounded-xl">
                <div className="hero-content flex-col">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center lg:text-left">
                               
                                <p className="py-6">New to <span className=" text-violet-500">Toy Nestopia? </span> <br /> <Link to='/register' className=" underline underline-offset-8">Register Here</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">
                        <h1 className=" text-xl"> Try with</h1>
                        <div className=" py-5 flex justify-between gap-4">
                            <div><button> Google</button></div>
                            <div><button> Github</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;