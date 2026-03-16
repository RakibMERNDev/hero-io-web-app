import "./NavBar.css";

import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";

import logo from '../../assets/logo.png'


const navLinks = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/apps",
    pathName: "Apps",
  },
  {
    path: "/installation",
    pathName: "Installation",
  },
];

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((navItem) => (
              <li key={navItem.pathName}>
                <NavLink to={navItem.path} className={"font-medium"}>
                  {navItem.pathName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-1">
          {/* logo */}
          <img src={logo} alt="logo" className="max-w-10 max-h-10" />
          {/* text */}

          <p className="text-gradient font-bold">HERO.IO</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((navItem) => (
            <li key={navItem.pathName}>
              <NavLink to={navItem.path} className={"font-medium"}>
                {navItem.pathName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className=" bg-gradient-brand text-white flex items-center px-4 gap-2 py-3 rounded-sm lg:text-xl">
          <FaGithub /> <span className="font-semibold ">Contribute</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
