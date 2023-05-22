import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Toys = ({ toys }) => {
    const { name, picture_url } = toys;

    useEffect(() => {
        AOS.init();
      }, []);
    
    
    return (
        <div className=" my-10" data-aos="fade-down" data-aos-delay="400">

            <div className="card w-72 h-72 bg-base-100 mx-auto ">
                <figure className=""><img className=" rounded-xl w-full h-32" src={picture_url} alt={picture_url} /></figure>
                <div className="card-body">
                    <h2 className="text-sm mx-4 bg-transparent">
                         
                        <div className="badge badge-success">NEW</div> <br />
                        {name}
                    </h2>
                    
                </div>
            </div>

        </div>
    );
};

export default Toys;