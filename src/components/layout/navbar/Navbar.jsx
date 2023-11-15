import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import handleLinkClick from "../../../utils/helper/layout/layoutHelpers";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible((prevVisible) => !prevVisible);
  };

  const hideNavbar = () => {
    setIsNavbarVisible(false);
  };

  /*const handleLinkClick = () => {
    setIsNavbarVisible(false);        //We can also directly pass this function to navlink.
  }; */

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-top">
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isNavbarVisible ? "show" : ""
          }`}
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/men"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Men
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/women"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Women
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/kids"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Kids
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/home-living"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Home & Living
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/beauty"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Beauty
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/electronics"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Electronics
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/sports"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Sports
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/shoes"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Shoes
              </NavLink>
            </li>
            <li className="nav-item mx-2" onClick={hideNavbar}>
              <NavLink
                className="nav-link"
                to="/bags"
                onClick={() => handleLinkClick(setIsNavbarVisible)}
              >
                Bags
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
