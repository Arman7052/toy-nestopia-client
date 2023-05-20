import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const About = () => {
    return (
      <div>
        <h1 className="text-center text-2xl pt-10 italic">About Us</h1>
         <div className=" flex flex-col-reverse lg:flex-row-reverse lg:justify-evenly py-10 lg:mx-10">
         <div className="hero w-fit  rounded-lg" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80")` }}>
            <div className=" hero-overlay rounded-lg bg-opacity-60"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Marquee><h1 className="mb-5 text-2xl font-bold">Hello there</h1></Marquee>
                    <p className=" text-cyan-300">Toy Nestopia offers a range of high-quality components for building and customizing your own unique toys. From durable plastic bodies to colorful interchangeable accessories, our components are designed to inspire creativity and provide endless possibilities for imaginative play. With Toy Nestopia, you can easily create and customize your dream toys with ease...</p>
                    <Link to='/about' className="btn btn-ghost hover:text-indigo-400"> More </Link>
                </div>
            </div>
        </div>
        <div className="">
            <img className=" rounded-lg" src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60" alt="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60" />
        </div>
       </div>
      </div>
    );
};

export default About;