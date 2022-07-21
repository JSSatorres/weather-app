import React from "react";
import { NavLink } from "react-router-dom";
import { FaFirstOrderAlt,FaBars } from "react-icons/fa";


import "./nav.scss"

const Nav = () => {
  return (
    <header className="container">
      <div className="container__wrapper">
        <div className="container__wrapper__logoContainer">
          <FaFirstOrderAlt/>
          <p>Wheater</p>
          <p>App</p>
        </div>
        <div className="container__wrapper__mobileIcon"> <FaBars/></div>         
        <ul className="container__wrapper__menu">
          <li className="container__wrapper__menu__menuItem">
            <NavLink className="container__wrapper__menu__menuItem__link" to="/">Home</NavLink>
          </li>
          <li className="container__wrapper__menu__menuItem">
            <NavLink className="container__wrapper__menu__menuItem__link" to="/Profile">Profile</NavLink>
          </li>
          <li className="container__wrapper__menu__menuItem">
            <NavLink className="container__wrapper__menu__menuItem__link" to="/">My Places</NavLink>
          </li>
          <li className="container__wrapper__menu__menuItem">
            <NavLink className="container__wrapper__menu__menuItem__link" to="/">ill</NavLink>
          </li>
        </ul>       
      </div>
    </header>
    )
};

export default Nav;
