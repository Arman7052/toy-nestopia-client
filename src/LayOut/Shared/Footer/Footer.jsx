
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (

        <footer className="flex flex-col py-2 text-center  lg:flex-row lg:justify-evenly p-5 px-5 bg-base-200 text-base-content ">
            <div className=' flex flex-col'>
                <div className=' mx-auto'>
                    <img src={logo} alt="" className=' h-10 w-10' />
                </div>
                <div>
                    <p>Toy Nestopia ltd.<br /> Selling Educational Toy since 2023</p>
                </div>
            </div>

            <div className='flex flex-col  lg:justify-evenly'>

                <div><Link to='/about' className="link link-hover">About us</Link></div>

            </div>

            <div >
                <div> <span className="footer-title ">Find us on</span></div>
                <div className='flex flex-row justify-between gap-2 py-4' >
                    <div> <FaFacebook></FaFacebook>  </div>
                    <div><FaInstagram></FaInstagram> </div>
                    <div><FaYoutube></FaYoutube></div>
                </div>
            </div>

        </footer>

    );
};

export default Footer;