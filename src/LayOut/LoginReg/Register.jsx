import { Link } from "react-router-dom";

import { FaGithub, FaGoogle } from 'react-icons/fa';


const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <>

            <h1 className="text-5xl font-bold text-center">Register Now!</h1>
            <div className="hero min-h-screen bg-base-200 rounded-xl mx-auto mt-5">
                <div className="hero-content flex-col">

                    <div className="card flex w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control py-2">

                                    <input type=" Name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control py-2">

                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control py-2">

                                    <input type="text" placeholder="Photo URl" className="input input-bordered" required />
                                </div>
                                <div className="form-control py-2">

                                    <input type="password" placeholder="Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control py-2 mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
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
                            <div><button><FaGoogle></FaGoogle></button></div>
                            <div><button><FaGithub></FaGithub></button></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;