import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div
        className={`${style.bg} vh-100 d-flex align-items-center justify-content-center text-center`}
      >
        <div className="container">
          <h1 className="py-3 text-white display-4 fw-bold">About Component</h1>

          <div className={style.starWrapper}>
            <i className="fas fa-star text-white fs-4"></i>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <p className="text-white text-start fs-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <p className="text-white text-start fs-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
