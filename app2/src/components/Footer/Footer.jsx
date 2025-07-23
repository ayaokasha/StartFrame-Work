import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <ul
                className={`list-unstyled list-inline ${style["social-icons"]}`}
              >
                <li className="list-inline-item mx-2">
                  <Link to="/">
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/">
                    <i className="fab fa-twitter fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/">
                    <i className="fab fa-instagram fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/">
                    <i className="fab fa-google-plus fa-lg"></i>
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link to="/">
                    <i className="fa fa-envelope fa-lg"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row text-start text-md-start g-5">
            <div className="col-md-4 col-xl-5 mb-4">
              <h5>About Us</h5>
              <p>
                We are an award-winning creative agency, dedicated to the best
                result in web design, promotion, business consulting, and
                marketing.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Contacts</h5>
              <p>
                <strong>Address:</strong> 798 South Park Avenue, Jaipur, Raj
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:dkstudioin@gmail.com">dkstudioin@gmail.com</a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://karosearch.com">karosearch.com</a>
              </p>
            </div>

            <div className="col-md-4 col-xl-3 mb-4">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className={style["bottom-text"]}>© All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
