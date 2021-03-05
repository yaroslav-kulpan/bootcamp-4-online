import React from "react";
import { NavLink, Link } from "react-router-dom";

const navbarLinks = [
  {
    exact: true,
    to: "/",
    label: "Главная",
  },
  {
    exact: false,
    to: "/products",
    label: "Продукты",
  },
  {
    exact: false,
    to: "/search",
    label: "Поиск",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Логотип
        </Link>
        <ul className="navbar-nav">
          {navbarLinks.map(({ exact, to, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                exact={exact}
                to={to}
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
