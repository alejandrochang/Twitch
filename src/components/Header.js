import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className="ui secondary pointing menu">
      <Link to="/" style={{ color: "white" }} className="item">
        Browse
      </Link>
      <div className="right menu">
        <Link to="/" style={{ color: "white" }} className="item">
          All Streams
        </Link>
      </div>
    </div>;
}

export default Header;