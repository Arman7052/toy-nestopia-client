import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allToys?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyToys(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
     
      {myToys.map(toy => (
        <div key={toy._id}>{toy.name}</div>
      ))}
    </div>
  );
};

export default MyToys;
