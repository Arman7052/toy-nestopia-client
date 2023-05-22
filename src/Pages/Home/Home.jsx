import Toyslist from "../AllToys/Toyslist";
import About from "./About";
import Banner from "./Banner";
import NewsLatter from "./NewsLatter";
import ShopByCategory from "./ShopbyCatagory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toyslist></Toyslist>
            <ShopByCategory></ShopByCategory>

            <About></About>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;