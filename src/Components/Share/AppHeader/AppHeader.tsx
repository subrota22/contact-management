import React from 'react';
import SideBar from '../SideBar/SideBar';
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const AppHeader = () => {
    return (
        <>

            <div className="flex justify-between py-6" style={{ backgroundColor: "#03143B" }}>
                <NavLink to="/">
                    <h2 className='text-2xl text-lime-400 text-center font-semibold mx-8'> Contact <span className='text-white'>management</span>  </h2>
                </NavLink>
                <label htmlFor="right-side-bar" className="drawer-button btn btn-success text-xl mx-8 w-18">
                    <FaBars className='text-white'></FaBars>
                </label>
            </div>

            <SideBar></SideBar>
        </>
    );
};

export default AppHeader;