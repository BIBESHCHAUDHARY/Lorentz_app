import React from "react";
import Payment from "../img/payment.png";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container">
        <div className="pb-4 mb-4 footermain">
          <div className="row g-4">
            <div className="col-lg-3">
              <h4 className=" text-white mb-0">ShopSphere</h4>
              <p className="text-white stock mb-0">Tech Products</p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-0 w-100 py-2 px-4 rounded-pill"
                  type="email"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className=" bg-secondary border-0 border-secondary py-2 px-4 position-absolute rounded-pill text-white footersubmit"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-secondary btn-md-square rounded-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h5 className="text-light mb-3">Why People Like us!</h5>
              <p className="mb-4 text-justify stock">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti eius minima aliquid quisquam perspiciatis, culpa totam
                omnis pariatur maxime in.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h5 className="text-light mb-3">Shop Info</h5>
              <a className="btn-link">About Us</a>
              <a className="btn-link">Contact Us</a>
              <a className="btn-link">Privacy Policy</a>
              <a className="btn-link">Terms & Condition</a>
              <a className="btn-link">Return Policy</a>
              <a className="btn-link">FAQs & Help</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="footer-item">
              <h5 className="text-light mb-3">Contact</h5>
              <p>Address: gwarko</p>
              <p>Email: testing@gmail.com</p>
              <p>Phone: +977 9857451234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
