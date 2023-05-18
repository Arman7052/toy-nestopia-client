import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png';

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
                <div className='flex flex-col'>
                    <div> <span className="footer-title">Services</span></div>
                    <div> <a className="link link-hover">Design</a></div>
                    <div> <a className="link link-hover">Branding</a></div>
                    
                    <div> <a className="link link-hover">Marketing</a></div>
                    <div> <a className="link link-hover">Advertisement</a></div>
                </div>
                <div className='flex flex-col  lg:justify-evenly'>
                    
                    <div><Link to='/about' className="link link-hover">About us</Link></div>  
                    <div><a className="link link-hover">Contact</a></div>  
                    
                </div>
             
            </footer>
        
    );
};

export default Footer;