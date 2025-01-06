import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { LuNotebookText } from "react-icons/lu"; 
import { FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className='flex gap-4'>
            {/* side nav */}
            <div className='lg:w-64 min-h-screen bg-[#D1A054] p-4'>
                <h2 className='uppercase'>Bistro boss</h2>
                <p className='uppercase mb-4'>resturent</p>
               <ul className='uppercase space-y-2'>
                <li><NavLink to='/dashboard/userHome' className='flex item-center gap-2'><IoHomeSharp /> user home</NavLink></li>
                <li><NavLink to='/dashboard/reservation' className='flex item-center gap-2'><ImSpoonKnife /> reservation</NavLink></li>
                <li><NavLink to='/dashboard/cart' className='flex item-center gap-2'><LuNotebookText /> my cart</NavLink></li>
                <li><NavLink to='/dashboard/myBooking' className='flex item-center gap-2'><FaUsers /> my booking</NavLink></li>
               </ul>
               <div className="divider"></div>
               <ul className='uppercase space-y-2'>
                <li><NavLink to='/' className='flex item-center gap-2'><IoHomeSharp /> Home</NavLink></li>
                <li><NavLink to='/menu' className='flex item-center gap-2'><IoMenu /> menu</NavLink></li>
                <li><NavLink to='/order' className='flex item-center gap-2'><FaShoppingBag /> shop</NavLink></li>
                <li><NavLink to='/contact'  className='flex item-center gap-2'><MdContacts /> contact</NavLink></li>
               </ul>

            </div>
           
            {/* content section */}
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;