import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);


  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navItems = <>
    <li> <Link to='/'>Home</Link>  </li>
    <li> <Link to='/blog'>Blog</Link>  </li>
    <li><Link to='/alltoys'>All toys</Link></li>
  
    <li> {user &&
      <Link to='/addtoy'>
        Add a toy
      </Link>}
    </li>
    <li> {user &&
      <Link to='/mytoys'>
        My toys
      </Link>}
    </li>
    
    <li> {user &&
      <Link to='/'>
        <img src={user.photoURL} alt="User Profile" className="h-8 w-8 rounded-full" />
      </Link>}
    </li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to='/'> <img src={logo} className='  h-7 w-7 lg:h-12 lg:w-12' alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ?
          <Link onClick={handleLogout} to='/' >Logout</Link> :
          <Link to='/login' className="btn btn-ghost">Login</Link>

        }
      </div>
    </div>
  );
};

export default Navbar;