import Footer from "../../LayOut/Shared/Footer/Footer";
import Navbar from "../../LayOut/Shared/Header/Navbar";


const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto text-center px-4 py-8">
                <h2 className="text-2xl font-bold py-5">About Toy Nestopia</h2>
                <p className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-2">
                    Toy Nestopia is dedicated to providing educational and learning toys that spark curiosity and foster a love for learning in children. We believe that play is a powerful tool for children's development, and our mission is to create toys that combine fun and education seamlessly.
                </p>
                <p className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-2">
                    Our range of educational toys is carefully designed to engage children in hands-on activities that promote critical thinking, problem-solving, creativity, and various skill sets. From building blocks and puzzles to science kits and interactive games, each toy is thoughtfully crafted to stimulate learning and exploration.
                </p>
                <p className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-2">
                    At Toy Nestopia, we prioritize quality and safety. All our educational toys undergo stringent testing to ensure they meet the highest standards of durability, non-toxicity, and child safety. We understand the importance of providing a safe and enriching play environment for children.
                </p>
                <p className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-2">
                    Our educational toys are designed to cater to different age groups and developmental stages, ensuring that children can learn and grow at their own pace. We believe in the power of play-based learning, where children can actively participate, experiment, and discover concepts in a fun and engaging manner.
                </p>
                <p className="mb-1 shadow-2xl text-start bg-indigo-950 rounded-lg p-2">
                    Toy Nestopia is not just for children; we also provide resources for parents and educators. Our website offers informative articles, activity ideas, and educational resources to support parents and teachers in creating meaningful learning experiences for children.
                </p>
                <p>
                    Join us at Toy Nestopia and embark on a journey of learning and discovery. Together, let's inspire young minds and nurture a lifelong love for learning through our innovative and educational toys.
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;