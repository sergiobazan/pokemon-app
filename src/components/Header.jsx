import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">Poke App</Link>
    </header>
  );
};

export default Header;
