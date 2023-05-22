import { Link } from "react-router-dom";


const AllToyTable = ({ toystable }) => {
    const { _id, name, seller_name,sub_category,price,available_quantity } = toystable;
    return (
        <>
            <tr>
               {/* 
  */}
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>{price}</td>
                <td>{available_quantity}</td>
                <td><Link to={`/toys/${_id}`} className=" underline underline-offset-auto">View Details</Link></td>
                
                
                </tr>
        </>
    );
};

export default AllToyTable;