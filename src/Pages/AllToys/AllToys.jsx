import { useEffect, useState } from "react";
import AllToyTable from "./AllToyTable";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [displayedToys, setDisplayedToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch("https://toy-nestopia-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  useEffect(() => {
    const filteredToys = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedToys(filteredToys.slice(0, limit));
  }, [allToys, searchQuery, limit]);

  const handleSearch = () => {
    const filteredToys = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedToys(filteredToys.slice(0, limit));
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowAll = () => {
    setDisplayedToys(allToys);
  };

  return (
    <div className="">
      <div className="overflow-x-auto text-center py-10">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="h-12 rounded-lg p-4"
        />
        <button className="mx-4 btn btn-ghost" onClick={handleSearch}>
          Search
        </button>
        

        <table className="table w-full mt-5">
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
            {displayedToys.map((toystable) => (
              <AllToyTable key={toystable._id} toystable={toystable} />
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary btn-block" onClick={handleShowAll}>
          Show All
        </button>
      </div>
      
    </div>
  );
};

export default AllToys;
