import AllToys from "../AllToys/AllToys";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllToys></AllToys>
            <About></About>
        </div>
    );
};

export default Home;