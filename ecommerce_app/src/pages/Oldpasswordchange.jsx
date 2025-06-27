import React, { useEffect, useState } from "react";
import Adminc from "../img/adminc.png";
import { usePasswordChangeWithOldMutation } from "../redux/Api/AuthApi";
import Showmessage from "../components/common/Showmessage";

function Oldpasswordchange() {
  const [CHANGEPASSWORD] = usePasswordChangeWithOldMutation();
  const [formData, setFormData] = useState({
    oldpassword: "",
    password: "",
    confirmationpassword: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await CHANGEPASSWORD(formData);
    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setFormData({
        oldpassword: "",
        password: "",
        confirmationpassword: "",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
  }, [error, success]);

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
  });

  return (
    <div className=" d-flex justify-content-center align-items-center ">
      <div className="card w-100 shadow-lg">
        <div className="form-header">
          <img src={Adminc} alt="" className="w-25 h-25" />
          <h6>Change Password</h6>
        </div>
        <div className="form-body">
          {error && <Showmessage status="fail" message={error} />}
          {success && <Showmessage status="success" message={success} />}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label stock">
                Current Password <span className="text-danger stock">*</span>
              </label>
              <input
                name="oldpassword"
                type="password"
                className="form-control py-2"
                id="currentPassword"
                placeholder="Enter Current password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label stock">
                New Password <span className="text-danger stock">*</span>
              </label>
              <input
                name="password"
                type="password"
                className="form-control py-2"
                id="newPassword"
                placeholder="Enter New password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label stock">
                Confirm Password <span className="text-danger stock">*</span>
              </label>
              <input
                name="confirmationpassword"
                type="password"
                className="form-control py-2"
                id="confirmPassword"
                placeholder="Enter confirm password"
                required
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-secondary rounded btn text-white w-100 py-2 stock"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Oldpasswordchange;
