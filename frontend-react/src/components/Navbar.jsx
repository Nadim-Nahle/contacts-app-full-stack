import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";;


const Navbar = () => {
  

  // To get current path
  const location = useLocation();
  // Iterate over nav items to add into UI
  const navItems = [
    { link: "/auth/contact", name: "Contacts" },
    { link: "/login", name: "Login" },
    { link: "/register", name: "Signup" },
    
    
  ];
  return (
    <nav className="top-bar">
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <NavLink key={index} to={navItem.link}>
              <li>{navItem.name}</li>
            </NavLink>
            
          );
        })}
        {location.pathname.includes("auth") && (
          <NavLink to="">
            <li><button>Logout</button></li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
