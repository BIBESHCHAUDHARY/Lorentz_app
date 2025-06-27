import React from "react";
import Banner1 from "../../img/apple.png";

function Banner() {
  return (
    <div className="container-fluid banner bg-danger my-5 ">
      <div className="container bannercontainer py-5 my-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h6 className="text-white">Apple Macbook Pro 2020 M1 Chips</h6>
              <p className=" text-light mb-4">Best Laptop</p>
              <p className="mb-4 text-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis corrupti, dolorum explicabo dicta, itaque
                consequatur repudiandae autem eligendi minima quibusdam
                necessitatibus adipisci. Natus aliquid enim at eaque magni eius
                atque.
              </p>
              <a className=" btn border-2 border-white rounded-pill text-white py-1 px-5">
                BUY
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={Banner1}
                className="img-fluid myimageforbanner w-100  rounded"
                alt=""
              />
              <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute bannerinfo">
                <h1 className="bannervalue">1</h1>
                <div className="d-flex flex-column">
                  <span className="stock h2 mb-0">1.2 lakhs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
