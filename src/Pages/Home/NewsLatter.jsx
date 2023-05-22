import { useState } from "react";
import Marquee from "react-fast-marquee";


const NewsLatter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
    };

    return (
        <div className=" my-10 py-10 lg:mx-32 shadow-lg bg-indigo-700 rounded-lg text-center mx-auto">
           <Marquee> <h1 className=" font-serif font-bold italic text-xl">SIGN UP FOR NEWSLETTER</h1></Marquee>
            <p>Subscribe to get more special Deals, <br />
                Events & Promotions</p>
            <div className=" m-2 lg:m-10 ">


                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mx-10  border-gray-500 py-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className="appearance-none p-4 bg-slate-700 rounded-lg border-1 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default NewsLatter;