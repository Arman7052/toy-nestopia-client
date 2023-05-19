import { Link } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";



const Register = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold text-center">Register Now!</h1>
            <div className="hero min-h-screen bg-base-200 rounded-xl mx-auto mt-5">
                <div className="hero-content flex-col">

                    <div className="card flex w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                
                                <input type=" Name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                
                                <input type="email" placeholder="Email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                               
                                <input type="text" placeholder="Photo URl" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="Password" className="input input-bordered" required/>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p className="py-10">Are you a<span className=" text-violet-500"> Toy Nestopia</span> user? <br /> <Link to='/login' className=" underline underline-offset-8">Login Here</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">
                        <h1 className="mx-5">OR</h1>
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

export default Register;