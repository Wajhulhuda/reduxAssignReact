import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import ChangeDark from "./Action";

const Navbar = () => {
  const isDark = useSelector((state) => state.darkReducer);
  const dispatch = useDispatch();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        !isDark ? "light" : "dark"
      } bg-${!isDark ? "light" : "dark"}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand ${isDark ? "darke" : "light"}`} to="/">
          Geekster
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/services"
              >
                Service
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-secondary me-5"
            onClick={() => dispatch(ChangeDark())}
          >
            Toggle theme to {isDark ? "Light" : "dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
