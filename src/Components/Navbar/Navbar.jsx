import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-[3px] z-[1] mt-3 w-52 p-2 shadow">
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to={"/"}>Home</NavLink></li>
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400  font-bold': 'font-bold hover:text-green-400'
          }
          to="/collation">Collation</NavLink></li>
   
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to="/pants">Pants</NavLink></li>
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to="/login">Login</NavLink></li>
      </ul>
    </div>
    <a  className="text-2xl font-Pacifico  bg-gradient-to-r from-green-600 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
    >Sha-Shop</a>
  </div>
  <div className="navbar hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to={"/"}>Home</NavLink></li>
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400  font-bold': 'font-bold hover:text-green-400'
          }
          to="/collation">Collation</NavLink></li>
    <li> <NavLink className={({isActive})=> 
  isActive ? 'text-green-400  font-bold': 'font-bold hover:text-green-400'
  }
  to="/t-Shirt">t-Shirts</NavLink></li>     
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to="/pants">Pants</NavLink></li>
    <li> <NavLink className={({isActive})=> 
          isActive ? 'text-green-400 font-bold': 'font-bold hover:text-green-400'
          }
          to="/login">Login</NavLink></li>
 </ul>
  </div>
  <div className="navbar-end ">
   <input
  type="text"
  placeholder="Search"
  className="input input-bordered input-success md:mr-4 w-40 md:w-52 rounded-[25px]" />
    <Link className="hidden md:inline-block hover:bg-green-400 bg-blue-500 text-white px-4 py-2 rounded">Done</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;