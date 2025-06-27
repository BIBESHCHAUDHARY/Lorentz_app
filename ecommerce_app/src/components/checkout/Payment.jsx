import React from "react";

function Payment() {
  return (
    <>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
            <input
              type="checkbox"
              className=""
              id="Transfer-1"
              name="Transfer"
              value="Transfer"
            />
            <label className="form-check-label" for="Transfer-1">
              Direct Bank Transfer
            </label>
          </div>
          <p className="text-start text-dark">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
            <input
              type="checkbox"
              className=""
              id="Payments-1"
              name="Payments"
              value="Payments"
            />
            <label className="form-check-label" for="Payments-1">
              Check Payments
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
            <input
              type="checkbox"
              className=""
              id="Delivery-1"
              name="Delivery"
              value="Delivery"
            />
            <label className="form-check-label" for="Delivery-1">
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="my-3 d-flex  flex-row  gap-2 align-items-center">
            <input
              type="checkbox"
              className=""
              id="Paypal-1"
              name="Paypal"
              value="Paypal"
            />
            <label className="form-check-label" for="Paypal-1">
              Paypal
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center pt-4">
        <button
          type="button"
          className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
        >
          Place Order
        </button>
      </div>
    </>
  );
}

export default Payment;
