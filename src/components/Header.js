import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" style={{ color: "#d3cae8" }} className="item">
        Browse
      </Link>
      <div className="right menu">
        <Link to="/" style={{ color: "#d3cae8" }} className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
