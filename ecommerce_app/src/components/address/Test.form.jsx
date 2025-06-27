import React, { useEffect, useState } from "react";
import { useUserInfoQuery } from "../../redux/Api/AuthApi";
import { useAddAddressMutation } from "../../redux/Api/AddressApi";
import { Provinces } from "../../db/provinces";

const AddressForm = () => {
  const { data: USER } = useUserInfoQuery();
  const [ADDRESS] = useAddAddressMutation();

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
  });

  const filterDistricts = Provinces?.find(
    (item) => item.name == formData?.billingState
  );

  const filtermunicipality = filterDistricts?.districts?.find(
    (item) => item.name == formData?.billingCity
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "billingState" && {
        billingCity: "",
        billingZip: "",
      }),
      ...(name === "billingCity" && {
        billingZip: "",
      }),
      ...(name === "sameAsBilling" && checked
        ? {
            shippingAddress: prev.billingAddress,
            shippingCity: prev.billingCity,
            shippingState: prev.billingState,
            shippingZip: prev.billingZip,
          }
        : !checked
        ? {
            shippingAddress: "",
            shippingCity: "",
            shippingState: "",
            shippingZip: "",
          }
        : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await ADDRESS({
    //   user: USER?.data?._id,
    //   fullName: formData.fullName,
    //   email: formData.email,
    //   phone: formData.phone,
    //   address: formData.billingAddress,
    //   district: formData.billingState,
    //   city: formData.billingCity,
    //   zipCode: formData.billingZip,
    //   addressType: "billing",
    // });
    // await ADDRESS({
    //   user: USER?.data?._id,
    //   fullName: formData.fullName,
    //   email: formData.email,
    //   phone: formData.phone,
    //   address: formData.shippingAddress,
    //   district: formData.shippingState,
    //   city: formData.shippingCity,
    //   zipCode: formData.shippingZip,
    //   addressType: "shipping",
    // });
  };

  useEffect(() => {
    if (USER?.data) {
      setFormData({
        fullName: USER?.data?.fullname,
        email: USER?.data?.email,
        phone: USER?.data?.phone,
      });
    }
  }, []);
  return (
    <div className="container py-5 mt-4">
      <div className="row">
        <div className="col-12 col-md-7">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
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
            <h4 className="mt-4">Billing Address</h4>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Provinces</label>
                <select
                  type="text"
                  className="form-control bg-transparent"
                  name="billingState"
                  value={formData.billingState}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    select province
                  </option>
                  {Provinces?.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">District</label>
                <select
                  type="text"
                  className="form-control bg-transparent"
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    select District
                  </option>
                  {filterDistricts?.districts?.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Municipality</label>
                <select
                  type="text"
                  className="form-control bg-transparent"
                  name="billingZip"
                  value={formData.billingZip}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    select Municipality
                  </option>
                  {filtermunicipality?.municipalities?.map((item, index) => {
                    return <option value={item.name}>{item.name}</option>;
                  })}
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
            {/* Shipping Address */}
            {!formData.sameAsBilling && (
              <>
                <h4 className="mt-4">Shipping Address</h4>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required={!formData.sameAsBilling}
                  />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className="form-control"
                      name="shippingState"
                      value={formData.shippingState}
                      onChange={handleChange}
                      required={!formData.sameAsBilling}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleChange}
                      required={!formData.sameAsBilling}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="shippingZip"
                      value={formData.shippingZip}
                      onChange={handleChange}
                      required={!formData.sameAsBilling}
                    />
                  </div>
                </div>
              </>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-primary text-white w-100 mt-3"
            >
              Save Address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
