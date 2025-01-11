import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { TiShoppingCart } from "react-icons/ti";
import useCart from '../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
   const [cart] =useCart()
//    console.log(cart)
    const links = <>
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/menu'>Ourmenu</NavLink>
        <NavLink to='/order'>Order Now</NavLink>
        <NavLink to='/myOrder'>My Order</NavLink>
        <NavLink to='/dashboard'><button className="btn">
        <TiShoppingCart />
        <div className="badge">+{cart.length}</div>
        </button></NavLink>

    </>

    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='border-2'>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase inter">
                            {links}
                        </ul>
                    </div>
                    <div className='grid'>
                        <a className="text-xl cinzel font-semibold text-white">BISTRO BOSS</a>
                        <a className="uppercase text-sm cinzel text-white">Restaurant</a>
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4 uppercase inter">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        {
                            user ?
                                <>
                                    <div>
                                        {user && (
                                            <>
                                                <div className='flex'>
                                                    <img title={user?.displayName} className='w-10 h-10 rounded-full' src={user.photoURL} alt="User Profile" />
                                                    <button onClick={handleLogout} className="btn p-1">Logout</button>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                </> : <>
                                    <Link to='/signup'><button className='btn p-1'>Signup</button></Link>
                                    <Link to='/login'><button className='btn p-1'>Login</button></Link>
                                </>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;