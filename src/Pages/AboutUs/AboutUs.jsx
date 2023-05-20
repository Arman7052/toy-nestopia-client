import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../../LayOut/Shared/Footer/Footer";
import Navbar from "../../LayOut/Shared/Header/Navbar";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />

            <div className=" text-center py-8 mx-5 lg:mx-40">
                <h2 className="text-2xl font-bold py-5" data-aos="fade-left">
                    About Toy Nestopia
                </h2>
                <p
                    className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-5"
                    data-aos="fade-left"
                >
                    Toy Nestopia is dedicated to providing educational and learning toys
                    that spark curiosity and foster a love for learning in children. We
                    believe that play is a powerful tool for children development, and our
                    mission is to create toys that combine fun and education seamlessly.
                </p>
                <p
                    className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-5"
                    data-aos="fade-right"
                >
                    Our range of educational toys is carefully designed to engage children
                    in hands-on activities that promote critical thinking, problem-solving,
                    creativity, and various skill sets. From building blocks and puzzles to
                    science kits and interactive games, each toy is thoughtfully crafted to
                    stimulate learning and exploration.
                </p>
                <p
                    className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-5"
                    data-aos="fade-left"
                >
                    At Toy Nestopia, we prioritize quality and safety. All our educational
                    toys undergo stringent testing to ensure they meet the highest
                    standards of durability, non-toxicity, and child safety. We understand
                    the importance of providing a safe and enriching play environment for
                    children.
                </p>
                <p
                    className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-5"
                    data-aos="fade-right"
                >
                    Our educational toys are designed to cater to different age groups and
                    developmental stages, ensuring that children can learn and grow at their
                    own pace. We believe in the power of play-based learning, where children
                    can actively participate, experiment, and discover concepts in a fun and
                    engaging manner.
                </p>
                <p
                    className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-5"
                    data-aos="fade-left"
                >
                    Toy Nestopia is not just for children; we also provide resources for
                    parents and educators. Our website offers informative articles, activity
                    ideas, and educational resources to support parents and teachers in
                    creating meaningful learning experiences for children.
                </p>
                <p data-aos="fade-right">
                    Join us at Toy Nestopia and embark on a journey of learning and
                    discovery. Together, let inspire young minds and nurture a lifelong love
                    for learning through our innovative and educational toys.
                </p>

                <div className="rounded-lg" data-aos="fade-left">
                    <Marquee>
                        <span className="">
                            <img className="h-20" src="https://i.ibb.co/d5nNQdb/sci2.jpg" alt="" />
                        </span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/vhRHTLy/math1.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/9vqXwN1/sci3.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/1znWjrv/math2.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/VDdMcwM/sci1.jpg  " alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/98G93T2/math3.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/cDrsTpw/sci5.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/j6n3nXy/sci4.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/d5nNQdb/sci2.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/vhRHTLy/math1.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/9vqXwN1/sci3.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/1znWjrv/math2.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/VDdMcwM/sci1.jpg  " alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/98G93T2/math3.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/cDrsTpw/sci5.jpg" alt="" /></span>
                        <span className=""><img className="h-20" src="https://i.ibb.co/j6n3nXy/sci4.jpg" alt="" /></span>

                    </Marquee>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;






