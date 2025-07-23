import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 start-0 w-100 z-2">
        <div className="container-fluid w-75">
          <NavLink className="navbar-brand text-light fs-1 " to={"/"}>
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars text-white fs-3"></i>
          </button>

       
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav ms-auto">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light fs-3 ${style.customLink} ${
                    isActive ? style.activeLink : ""
                  }`
                }
                to={"/about"}
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light fs-3 ${style.customLink} ${
                    isActive ? style.activeLink : ""
                  }`
                }
                to={"/portfolio"}
              >
                Portfolio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-light fs-3 ${style.customLink} ${
                    isActive ? style.activeLink : ""
                  }`
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
