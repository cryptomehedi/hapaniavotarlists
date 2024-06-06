// import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from "../../assets/jass4-logo.png";
import CustomLink from "./CustomLink";

const Navbar = () => {
  // const [showDropdown,setShowDropdown] = useState(false)

  // const menuItems =   <>
  //                         <li><CustomLink to="/menList">Men</CustomLink></li>
  //                         <li><CustomLink to="/">Home</CustomLink></li>
  //                         <li><CustomLink to="/womenList">Women</CustomLink></li>
  //                     </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <CustomLink to="/menLists">Men</CustomLink>
          </li>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/womenLists">Women</CustomLink>
          </li>
          <li>
            <CustomLink to="/login">Login</CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
