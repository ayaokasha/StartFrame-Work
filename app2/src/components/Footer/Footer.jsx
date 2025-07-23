import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3 text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item mx-2">
                  <Link to="/" className="text-white">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/" className="text-white">
                    <i className="fab fa-twitter fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/" className="text-white">
                    <i className="fab fa-instagram fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/" className="text-white">
                    <i className="fab fa-google-plus fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/" className="text-white">
                    <i className="fa fa-envelope fa-lg"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="bg-white" />

          <div className="row">
            <div className="col-12 text-center">
              <p>
                <u>
                  <Link
                    to="/national-transaction"
                    className="text-white text-decoration-underline"
                  >
                    National Transaction Corporation
                  </Link>
                </u>
                is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
                subsidiary of U.S. Bancorp, Minneapolis, MN]
              </p>
              <p className="mb-0">© All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
