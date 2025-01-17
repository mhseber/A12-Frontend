import { MdCardMembership } from "react-icons/md";
import logo from "../../../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar bg-gray-900 text-white px-4">
            {/* Logo + Website Name */}
            <div className="flex-1">
                <a className=" font-bold flex items-center text-blue-600 text-3xl">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-8 h-8 mr-2 "
                    />
                    ThreadTales
                </a>
            </div>

            {/* Navigation Links */}
            <div className=" hidden md:flex pr-10 gap-3">
                <a href="/" className="hover:text-blue-500 flex">
                    <IoIosHome className="mt-1" /> <i>Home</i>
                </a>
                <a href="/membership" className="hover:text-blue-500 flex">
                    <MdCardMembership className="mt-1" />
                    <i>Membership</i>
                </a>
            </div>
            {/* 3dots */}
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
                    className="menu menu-sm dropdown-content bg-base-100 text-blue-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Membership</a></li>
                </ul>
            </div>
            <div>
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;