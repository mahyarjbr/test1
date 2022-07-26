import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faSearch,faUserGroup,faUserCheck } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import img1 from "../../img/img1.png";

const Header = ({routes}) => {
  return (
    <div className="header">
      <div className="header_top">
      <div className="header_top-wrapper"> </div>
      </div>
      <h1 className="header_title">املاک هاشمی نسب</h1>
      <div className="header_rates">
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      <FontAwesomeIcon icon={faStar}/>
      </div>
      <ul className="header_items">
        {routes.map((route ,index) => (
          <li className={route.classname} key={index}>
            
            
            <Link to={route.path}> <FontAwesomeIcon icon={route.icon}/> {route.sidebar}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
