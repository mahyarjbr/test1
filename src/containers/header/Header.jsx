import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faSearch,faUserGroup,faUserCheck } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({routes}) => {
  return (
    <div className="header">
      <div className="header_top">
        <img src="" alt="" />
      </div>
      <h2 className="header_title">املاک هاشمی نسب</h2>
      <div className="header_rates">
      <FontAwesomeIcon icon={faStar}/>
      </div>
      <ul className="header_items">
        {routes.map((route ,index) => (
          <li className="header_item" key={index}>
            
            <Link to={route.path}>  <FontAwesomeIcon icon={route.icon}/> {route.sidebar}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
