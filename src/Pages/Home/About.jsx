import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl pt-10 italic">About Us</h1>
      <div
        className="flex flex-col-reverse lg:flex-row-reverse lg:justify-evenly py-10 lg:mx-10"
        data-aos="fade-up"
      >
        <div
          className="hero w-fit rounded-lg"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80")',
          }}
          data-aos="zoom-in"
        >
          <div className="hero-overlay rounded-lg bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold" data-aos="fade-up">
                Hello there
              </h1>
              <p
                className="text-cyan-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Toy Nestopia offers a range of high-quality components for
                building and customizing your own unique toys. From durable
                plastic bodies to colorful interchangeable accessories, our
                components are designed to inspire creativity and provide
                endless possibilities for imaginative play. With Toy Nestopia,
                you can easily create and customize your dream toys with ease...
              </p>
              <Link
                to="/about"
                className="btn btn-ghost hover:text-indigo-400"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                More
              </Link>
            </div>
          </div>
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="600">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default About;






