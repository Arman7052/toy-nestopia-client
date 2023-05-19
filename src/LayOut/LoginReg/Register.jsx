import { Link } from "react-router-dom";

import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser,signInWithGoogle} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo_Url =form.photo_url.value;
        const password =form.password.value;
        console.log(name,email,photo_Url,password);

        createUser(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .then(error =>console.log(error))
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

                                    <input type=" Name" placeholder="Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control py-2">

                                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control py-2">

                                    <input type="url" placeholder="Photo_URl" name="photo_url" className="input input-bordered" required />
                                </div>
                                <div className="form-control py-2">

                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

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

export default Register;