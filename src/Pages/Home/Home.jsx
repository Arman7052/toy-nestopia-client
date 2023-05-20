import Toyslist from "../AllToys/Toyslist";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toyslist></Toyslist>
            <About></About>
        </div>
    );
};

export default Home;