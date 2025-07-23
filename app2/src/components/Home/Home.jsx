import React from "react";
import avatar from "../../assets/images/imgi_1_avataaars.svg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.bg}>
        <div className="d-flex flex-column align-items-center justify-content-center text-center gap-3">
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: 250 }}
          />
          <h1 className="text-white display-4 fw-bold">Start Framework</h1>

          <div className={style.starWrapper}>
            <i className="fas fa-star text-white fs-4"></i>
          </div>

          <p className="text-white fs-5 mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
