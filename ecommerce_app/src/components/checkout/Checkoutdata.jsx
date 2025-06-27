import React from "react";
import Productinfo from "./Productinfo";
import Payment from "./Payment";

function Checkoutdata() {
  return (
    <div className="">
      <div className=" ">
        <h1 className="mb-4">Billing details</h1>
        <form action="#">
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      First Name<sup>*</sup>
                    </label>
                    <input type="text" className="form-control py-3" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      Last Name<sup>*</sup>
                    </label>
                    <input type="text" className="form-control py-3" />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Company Name<sup>*</sup>
                </label>
                <input type="text" className="form-control py-3" />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Address <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House Number Street Name"
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Town/City<sup>*</sup>
                </label>
                <input type="text" className="form-control py-3" />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Country<sup>*</sup>
                </label>
                <input type="text" className="form-control py-3" />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Postcode/Zip<sup>*</sup>
                </label>
                <input type="text" className="form-control py-3" />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Mobile<sup>*</sup>
                </label>
                <input type="tel" className="form-control py-3" />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Email Address<sup>*</sup>
                </label>
                <input type="email" className="form-control py-3" />
              </div>
              <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
                <input
                  className="mycustomcheckbox"
                  type="checkbox"
                  id="Account-1"
                  name="Accounts"
                  value="Accounts"
                />
                <label className="form-check-label" for="Account-1">
                  Create an account?
                </label>
              </div>
              <hr />
              <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
                <input
                  className=""
                  type="checkbox"
                  id="Address-1"
                  name="Address"
                  value="Address"
                />
                <label className="form-check-label r-3 " for="Address-1">
                  Ship to a different address?
                </label>
              </div>
              <div className="form-item">
                <textarea
                  name="text"
                  className="form-control"
                  cols="30"
                  rows="11"
                  placeholder="Oreder Notes (Optional)"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-5">
              <Productinfo />
              <Payment />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkoutdata;
