import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { BiSolidBookAdd } from "react-icons/bi";
const SideBar = () => {
    return (
        <div className="drawer drawer-start" >
            <input id="right-side-bar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side" >
                <label htmlFor="right-side-bar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content sideBarList" style={{ backgroundColor: "#03143B" }}>
                    {/* Sidebar content here */}

                    <div className="tooltip hover:tooltip-open tooltip-right tooltip-accent" data-tip="Home page">
                        <li><NavLink to={'/'}><AiFillHome className="text-white mx-2 text-lg"></AiFillHome> Home</NavLink></li>
                    </div>
                    <div className="tooltip hover:tooltip-open tooltip-right tooltip-accent" data-tip="Add contact page">
                        <li><NavLink to={'/add-contact'}><BiSolidBookAdd className="text-white mx-2 text-lg"></BiSolidBookAdd> Add contact </NavLink></li>
                    </div>
                    <div className="tooltip hover:tooltip-open tooltip-right tooltip-accent" data-tip="Dashboard page">
                        <li><NavLink to={'/dashboard'}> <AiFillDashboard className="text-white mx-2 text-lg"></AiFillDashboard>Dashboard </NavLink></li>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default SideBar;