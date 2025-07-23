import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={style.pageWrapper}>
        <div className="container-fluid px-3">
          <div className="head text-center py-5">
            <h1 className=" py-5">Contact Component</h1>
            <div className={style.starWrapper}>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div
                className={`${style.formContainer} shadow-lg p-4 p-md-5 rounded-4`}
              >
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className={`form-control ${style.customInput}`}
                      id="userName"
                      placeholder="User Name"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="number"
                      className={`form-control ${style.customInput}`}
                      id="userAge"
                      placeholder="User Age"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      className={`form-control ${style.customInput}`}
                      id="userEmail"
                      placeholder="User Email"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="password"
                      className={`form-control ${style.customInput}`}
                      id="userPassword"
                      placeholder="User Password"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className={`btn ${style.submitBtn} mt-3 px-4 py-2`}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
