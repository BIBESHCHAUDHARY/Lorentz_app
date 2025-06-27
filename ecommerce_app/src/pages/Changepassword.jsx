import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useLocation } from "react-router";
import Lottie from "react-lottie";
import changepassword from "../img/changepassword.json";
import { useChangePasswordMutation } from "../redux/Api/AuthApi";
import Showmessage from "../components/common/Showmessage";

function Changepassword() {
  const { state } = useLocation();
  const [CHANGEPASSWORD] = useChangePasswordMutation();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationpassword, setConfirmationPassword] = useState("");
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const api = await CHANGEPASSWORD({
      email: state,
      password,
      confirmationpassword,
    });
    if (api?.error) {
      setError(api?.error?.data?.message);
      setSuccess("");
    } else {
      setSuccess(api?.data?.message);
      setError("");
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header title={"Change Password"} />
      <div className="container-fluid contact ">
        <div className="container pt-5">
          <div className="p-2 p-md-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-lg-6 ">
                <div className=" w-75 mx-auto">
                  <Lottie
                    options={{
                      animationData: changepassword,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className=" mb-2 ">Change your password</h3>
                {error && <Showmessage status="fail" message={error} />}
                {success && (
                  <Showmessage status="success" message={`${success}`} />
                )}
                <form action="" onSubmit={handleChangePassword}>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="text"
                    className="  w-100 w-lg-100 form-control border-1 py-2 mb-3"
                    placeholder="New Password"
                  />
                  <input
                    value={confirmationpassword}
                    onChange={(e) => setConfirmationPassword(e.target.value)}
                    required
                    type="text"
                    className="  w-100 w-lg-100 form-control border-1 py-2 mb-3"
                    placeholder="Confirmation Password"
                  />
                  <button
                    className="mx-auto w-100 mb-2 btn form-control stock py-2 bg-secondary text-white "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <Link to="/login" className=" stock text-secondary backtologin">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Changepassword;
