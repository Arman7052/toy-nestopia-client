import { Link } from "react-router-dom";
import errorImg from "../../assets/404.png";

const Error = () => {
  return (
    <div className="flex items-center justify-evenly h-screen">
      <div>
        <img src={errorImg} alt={errorImg} />
      </div>
      <div className="text-center py-5">
        <h1 className="text-2xl font-serif italic py-5">Where are my Toys?</h1>
        <p className=" py-5 text-xl italic">Find my toy's . If you can't ,I will go back...</p>
        <Link to="/">
          <button className="btn btn-success btn-block">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
