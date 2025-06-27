import Lottie from "react-lottie";
import { Link, useLocation, useNavigate } from "react-router";
import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Onetimepassword from "../img/otp.json";
import { useOtpVerifyMutation } from "../redux/Api/AuthApi";
import Showmessage from "../components/common/Showmessage";

function Otpverify() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const [OTP] = useOtpVerifyMutation();
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "instant",
    });
  }, []);

  const formHanlder = async () => {
    const api = await OTP({ otp });
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      setError("");
      navigate("/change-password", {
        state: state,
      });
    }
  };

  return (
    <>
      <Header title={"Forget Password"} />
      <div className="container-fluid contact ">
        <div className="container pt-5">
          <div className="p-2 p-md-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <Lottie
                  height={250}
                  options={{
                    animationData: Onetimepassword,
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                {error != "" && <Showmessage message={error} status="fail" />}
                <h3 className=" mb-1  ">OTP Verification</h3>
                <p className="mb-2 stock">
                  One Time Password (OTP) has been sent via Email to
                  <span className="fw-bold text-dark"> {state}</span>
                </p>
                <p className="mb-2 stock">Enter the OTP below to verify it.</p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                  inputType="tel"
                  inputStyle={{
                    borderRadius: 100,
                    width: 45,
                    marginRight: 10,
                    height: 45,
                    borderWidth: 0.5,
                  }}
                  shouldAutoFocus={true}
                  onPaste={true}
                />
                <button
                  onClick={formHanlder}
                  className="d-block mt-3 w-100 mb-2 btn form-control py-2 bg-secondary text-white "
                  type="submit"
                >
                  Submit
                </button>
                <Link
                  to="/login"
                  className="mx-auto stock createhere text-secondary mt-2"
                >
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

export default Otpverify;
