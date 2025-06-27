import React from "react";
import Categorydetail from "./Categorydetail";
import SingleItem from "../../img/single-item.jpg";
import Information from "./Information";
import Reply from "./Reply";
import Vegetable6 from "../../img/vegetable-item-6.jpg";

function Product() {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border rounded">
                  <a href="#">
                    <img
                      src={SingleItem}
                      className="img-fluid rounded"
                      alt="Image"
                    />
                  </a>
                </div>
              </div>
              {/* Category */}
              <Categorydetail />
              <Information />
              <Reply />
            </div>
          </div>
        </div>
        <h1 className="fw-bold mb-0">Related products</h1>
        <div className="">
          <div className=" container">
            <div classNameName="row">
              <div classNameName="col-12 col-lg-4">
                <div className="border border-primary rounded position-relative ">
                  <div className="vesitable-img">
                    <img
                      src={Vegetable6}
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="text-white bg-primary px-3 py-1 rounded position-absolute productproduct">
                    Vegetable
                  </div>
                  <div className="p-4 pb-0 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div classNameName="col-12 col-lg-4">
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src={Vegetable6}
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="text-white bg-primary px-3 py-1 rounded position-absolute productproduct">
                    Vegetable
                  </div>
                  <div className="p-4 pb-0 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
