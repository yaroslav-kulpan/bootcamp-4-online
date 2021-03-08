import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container text-center">
          <Link to="/" className="navbar-brand">
            The Delivery
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
