import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import OTPInput from "react-otp-input";
import Lottie from "react-lottie";
import Onetimepassword from "../img/otp.json";
import { useLocation, useNavigate } from "react-router";
import {
  useResendOtpMutation,
  useVerifyAccountMutation,
} from "../redux/Api/AuthApi";
import Showmessage from "../components/common/Showmessage";
import LoadingButton from "../components/common/LoadingButton";
import { toast } from "react-toastify";

function VerifyAccount() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [VERIFY, { isLoading }] = useVerifyAccountMutation();
  const [RESEND, { isLoading: resendLoading }] = useResendOtpMutation();
  const [success, setSuccess] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "instant",
    });
  }, []);

  const formHanlder = async () => {
    const api = await VERIFY({ otp });
    console.log(api);
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      setError("");

      toast.success("Your account is verified.");
      navigate("/login");
    }
  };

  const resendOtp = async () => {
    const api = await RESEND({ email: state?.email });
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
  }, [error, success]);
  return (
    <>
      <Header title="Verify Account" />
      <div className="container-fluid  ">
        <div className="container pt-5">
          <div className="p-2 p-md-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-lg-5">
                <Lottie
                  height={250}
                  options={{
                    animationData: Onetimepassword,
                  }}
                />
              </div>
              <div className="col-lg-7 ">
                {error && <Showmessage status={"fail"} message={error} />}
                {success && (
                  <Showmessage status={"success"} message={success} />
                )}

                <div className="otp-container">
                  <h3>Verify Your Account</h3>
                  <p>
                    We emailed you the four-digit code to{" "}
                    <span className="text-primary">{state?.email}. </span>
                    Enter the code below to confirm your email address
                  </p>

                  <div className="mt-1">
                    <OTPInput
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
                      className="w-100 my-2 btn form-control bg-secondary stock py-2 text-white"
                      type="submit"
                    >
                      {isLoading ? <LoadingButton /> : "Submit"}
                    </button>
                  </div>

                  <p className="stock">
                    If you didn't receive a code, <br />
                    <button
                      onClick={() => resendOtp()}
                      className="border-0 px-5 py-2 mt-1 bg-danger text-white rounded-1   stock"
                    >
                      {resendLoading ? <LoadingButton /> : "Resend"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyAccount;
