import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({routes}) => {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes.map((route ,index) => (
          <li key={index}>
            <Link to={route.path}>{route.sidebar}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
