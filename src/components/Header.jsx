import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <button id="link-btn">HOME</button>
      </Link>
      <Link to="/addTask">
        <button id="link-btn">ADD TASK</button>
      </Link>
      <Link to="/team">
        <button id="link-btn">TEAM</button>
      </Link>
    </header>
  );
};

export default Header;
