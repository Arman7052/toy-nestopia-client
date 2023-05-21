import { useEffect, useState } from "react";
import AllToyTable from "./AllToyTable";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [displayedToys, setDisplayedToys] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, []);

    useEffect(() => {
        setDisplayedToys(allToys);
    }, [allToys]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                            {
                                displayedToys.map(toystable => <AllToyTable
                                    key={toystable._id}

                                    toystable={toystable}

                                ></AllToyTable>)
                            }
                        

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;


