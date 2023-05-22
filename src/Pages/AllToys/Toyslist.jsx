import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo_s.png';
import Toys from "./Toys";


const Toyslist = () => {
  const [allToys, setAllToys] = useState([]);
  const [displayedToys, setDisplayedToys] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/allToys')
      .then(res => res.json())
      .then(data => setAllToys(data));
  }, []);

  useEffect(() => {
    setDisplayedToys(allToys);
  }, [allToys]);

  return (
    <>
      <div className="py-5" data-aos="fade-up">
        <Marquee speed={100}>
          <h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1>
          <img src={logo} alt="" />
          <h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1>
        </Marquee>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {displayedToys.slice(0, 8).map(toys => (
          <Toys
            key={toys._id}
            toys={toys}
            data-aos="fade-down" 
          />
        ))}
      </div>
      
    </>
  );
};

export default Toyslist;
