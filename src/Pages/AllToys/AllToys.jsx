import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import logo from '../../assets/logo_s.png';
import Toys from "./Toys";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [displayedToys, setDisplayedToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setAllToys(data));
    },[]);

    useEffect(() => {
        setDisplayedToys(showAll ? allToys : allToys.slice(0, 4));
    }, [showAll, allToys]);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <>
            <div className="py-5">
                <Marquee speed={100}>
                    <h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1>
                    <img src={logo} alt="" />
                    <h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1>
                </Marquee>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {displayedToys.map(toys => (
                    <Toys
                        key={toys._id}
                        toys={toys}
                    />
                ))}
            </div>
            {!showAll && allToys.length > 4 && (
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                </div>
            )}
            {showAll && (
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleShowLess}
                    >
                        Show Less
                    </button>
                </div>
            )}
        </>
    );
};

export default AllToys;









// import Marquee from "react-fast-marquee";
// import logo from '../../assets/logo_s.png';


// import { useEffect, useState } from "react";
// import Toys from "./Toys";

// const AllToys = () => {
//     const [allToys, setAllToys] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/allToys')
//         .then(res => res.json())
//         .then(data => setAllToys(data));
//     },[])

//     return (
//         <>
//             <div className=" py-5">
//                 <Marquee speed={100}> <span ><h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1></span> <span ><img src={logo} alt="" /></span> <span ><h1 className="text-center text-2xl font-bold italic py-10">Our Collection's</h1></span></Marquee>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//                 {
//                     allToys.map(toys => <Toys
//                     key={toys._id}
//                     toys={toys}
//                     ></Toys>)
//                 }
//             </div>
//         </>
//     );
// };

// export default AllToys;