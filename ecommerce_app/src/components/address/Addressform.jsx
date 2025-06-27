import React, { useEffect, useState } from "react";
import { useUserInfoQuery } from "../../redux/Api/AuthApi";
import { useAddAddressMutation } from "../../redux/Api/AddressApi";
import { Provinces } from "../../db/provinces";
import Productinfo from "../checkout/Productinfo";
import { useAddOrderMutation } from "../../redux/Api/OrderApi";
import { paymentmethod } from "../common/paymentcash";
import { useEmptyCartMutation } from "../../redux/Api/CartApi";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddressForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data: USER } = useUserInfoQuery();
  const [ADDRESS] = useAddAddressMutation();
  const [ORDER] = useAddOrderMutation();
  const [EMPTYCART] = useEmptyCartMutation();
  const cart = USER?.data?.cart;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    sameAsBilling: false,
    paymentMethod: "",
    uploadImage: null,
    transactionid: "",
  });

  const filterDistricts = Provinces?.find(
    (item) => item.name === formData?.billingState
  );

  const filtermunicipality = filterDistricts?.districts?.find(
    (item) => item.name === formData?.billingCity
  );

  const filterDistrictsforShipping = Provinces?.find(
    (item) => item.name === formData?.shippingState
  );
  const filtermunicipalityforShipping =
    filterDistrictsforShipping?.districts?.find(
      (item) => item.name === formData.shippingCity
    );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const newState = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "billingState") {
        newState.billingCity = "";
        newState.billingZip = "";
      }
      if (name === "billingCity") {
        newState.billingZip = "";
      }
      if (name === "shippingState") {
        newState.shippingCity = "";
        newState.shippingZip = "";
      }
      if (name === "shippingCity") {
        newState.shippingZip = "";
      }
      if (name === "sameAsBilling") {
        if (checked) {
          newState.shippingAddress = prev.billingAddress;
          newState.shippingCity = prev.billingCity;
          newState.shippingState = prev.billingState;
          newState.shippingZip = prev.billingZip;
        } else {
          newState.shippingAddress = "";
          newState.shippingCity = "";
          newState.shippingState = "";
          newState.shippingZip = "";
        }
      }

      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const billing = await ADDRESS({
      user: USER?.data?._id,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.billingAddress,
      province: formData.billingState,
      district: formData.billingCity,
      municipality: formData.billingZip,
      addressType: "billing",
    });

    const billlingaddress = billing?.data?.data?._id;
    const shipping = await ADDRESS({
      user: USER?.data?._id,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.shippingAddress,
      province: formData.shippingState,
      district: formData.shippingCity,
      municipality: formData.shippingZip,
      addressType: "shipping",
    });

    const shippingaddress = shipping?.data?.data?._id;
    if (formData.paymentMethod == "cashondelivery") {
      await ORDER({
        user: USER?.data?._id,
        billingAddress: billlingaddress,
        shippingAddress: shippingaddress,
        products: state ? JSON.stringify(state) : JSON.stringify(cart),
        payment_method: formData.paymentMethod,
        transactionid: formData.transactionid,
      });
      await EMPTYCART();
      navigate("/account/order");
      toast.success("Your order is successfully.");
    } else {
      const formdata = new FormData();
      formdata.append("user", USER?.data?._id);
      formdata.append("billingAddress", billlingaddress);
      formdata.append("shippingAddress", shippingaddress);
      formdata.append(
        "products",
        state ? JSON.stringify(state) : JSON.stringify(cart)
      );
      formdata.append("payment_method", formData.paymentMethod);
      formdata.append("image", formData.uploadImage);
      formdata.append("transactionid", formData.transactionid);
      await ORDER(formdata);
      await EMPTYCART();
      navigate("/account/order");
      toast.success("Your order is successfully.");
    }
  };

  useEffect(() => {
    if (USER?.data) {
      setFormData((prev) => ({
        ...prev,
        fullName: USER?.data?.fullname,
        email: USER?.data?.email,
        phone: USER?.data?.phone,
      }));
    }
  }, [USER]);

  return (
    <div className="container py-5 mt-4">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="row">
          <div className="col-12 col-md-7">
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Billing Address */}
            <h6 className="mt-4">Billing Address</h6>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Provinces</label>
                <select
                  className="form-control bg-transparent"
                  name="billingState"
                  value={formData.billingState}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  {Provinces?.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">District</label>
                <select
                  className="form-control bg-transparent"
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {filterDistricts?.districts?.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Municipality</label>
                <select
                  className="form-control bg-transparent"
                  name="billingZip"
                  value={formData.billingZip}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Municipality
                  </option>
                  {filtermunicipality?.municipalities?.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* Same as Billing Checkbox */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="sameAsBilling"
                name="sameAsBilling"
                checked={formData.sameAsBilling}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="sameAsBilling">
                Shipping address same as billing
              </label>
            </div>

            {/* Shipping Address (if not same as billing) */}
            {!formData.sameAsBilling && (
              <>
                <h6 className="mt-4">Shipping Address</h6>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Provinces</label>
                    <select
                      className="form-control bg-transparent"
                      name="shippingState"
                      value={formData.shippingState}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Province
                      </option>
                      {Provinces?.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">District</label>
                    <select
                      className="form-control bg-transparent"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      {filterDistrictsforShipping?.districts?.map(
                        (item, index) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Municipality</label>
                    <select
                      className="form-control bg-transparent"
                      name="shippingZip"
                      value={formData.shippingZip}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Municipality
                      </option>
                      {filtermunicipalityforShipping?.municipalities?.map(
                        (item, index) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
          </div>

          {/* Paymant */}
          <div className="col-lg-5">
            <div className="shadow mb-2 rounded">
              {state ? (
                <Productinfo items={state} />
              ) : (
                <Productinfo items={cart} />
              )}
            </div>
            <div className="p-4 border rounded shadow bg-light">
              <h6>Payment Method</h6>

              {paymentmethod.map((item, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value={item.originalvalue}
                    checked={formData.paymentMethod === item.originalvalue}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-primary">
                    {item.value}
                  </label>
                  <br />
                  {formData.paymentMethod == item.originalvalue &&
                    item?.image && (
                      <>
                        <img
                          src={item?.image}
                          alt="randomImage"
                          className="payment_method"
                        />
                        <br />
                        <label className="stock my-2">
                          Upload Payment Bill
                          <input
                            onChange={(e) =>
                              setFormData((pre) => ({
                                ...pre,
                                uploadImage: e.target.files[0],
                              }))
                            }
                            type="file"
                            className="form-control bg-transparent "
                            required
                          />
                        </label>
                        <label className="stock my-2">
                          Transaction Id
                          <input
                            // onChange={(e) =>
                            //   setFormData((pre) => ({
                            //     ...pre,
                            //     transactionid: e.target.value,
                            //   }))
                            // }
                            name="transactionid"
                            onChange={handleChange}
                            type="text"
                            className="form-control transactionid bg-transparent"
                            required
                          />
                        </label>
                      </>
                    )}
                </div>
              ))}

              <button
                type="submit"
                className="btn bg-secondary text-white w-100 mt-3"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        {/* end here */}
      </form>
    </div>
  );
};

export default AddressForm;
