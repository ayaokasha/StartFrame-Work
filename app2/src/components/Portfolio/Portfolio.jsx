import React from "react";

import img1 from "../../assets/images/imgi_1_poert1.png";
import img2 from "../../assets/images/imgi_2_port2.png";
import img3 from "../../assets/images/imgi_3_port3.png";

import style from "./Portfolio.module.css";
import { useState } from "react";

export default function Portfolio() {
  
  const images = [img1, img2, img3];

  const repeateImages = [...images, ...images];

  const [slectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={style.pageWrapper}>
        <div className="container">
          <div className="head text-center py-5">
            <h1 className=" py-5">Portfolio Component</h1>
            <div className={style.starWrapper}>
              <i className="fas fa-star fs-4"></i>
            </div>
          </div>

          <div className="row g-4">
            {repeateImages.map((src, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className={style.imgContainer}>
                  <img src={src} alt={`portfolio-${idx}`} />
                  <div
                    className={style.overlay}
                    onClick={() => setSelectedImage(src)}
                  >
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {slectedImage && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-content-center align-items-center z-3"
              onClick={() => setSelectedImage(null)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={slectedImage}
                alt="popup"
                className="w-50 rounded-4 shadow-lg border border-3 border-white"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
