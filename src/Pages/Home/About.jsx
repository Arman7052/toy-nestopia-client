import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const About = () => {
    return (
       <div className=" py-10 ">
         <div className="hero h-96 lg:min-h-full  rounded-lg" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80")` }}>
            <div className=" hero-overlay rounded-lg bg-opacity-60"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Marquee><h1 className="mb-5 text-5xl font-bold">Hello there</h1></Marquee>
                    <p className=" text-cyan-300">Toy Nestopia offers a range of high-quality components for building and customizing your own unique toys. From durable plastic bodies to colorful interchangeable accessories, our components are designed to inspire creativity and provide endless possibilities for imaginative play. With Toy Nestopia, you can easily create and customize your dream toys with ease...</p>
                    <Link to='/about' className="btn btn-ghost hover:text-indigo-400"> More </Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default About;