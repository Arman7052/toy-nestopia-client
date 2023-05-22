import Toyslist from "../AllToys/Toyslist";
import About from "./About";
import Banner from "./Banner";
import ShopByCategory from "./ShopbyCatagory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toyslist></Toyslist>
            <ShopByCategory></ShopByCategory>
            <About></About>
        </div>
    );
};

export default Home;