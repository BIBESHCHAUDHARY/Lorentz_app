import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import forgetpassword from "../img/forgetpassword.json";
import Showmessage from "../components/common/Showmessage";
import { useForgetPasswordMutation } from "../redux/Api/AuthApi";

function Forgetpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Forget] = useForgetPasswordMutation();
  const [error, setError] = useState("");
  const handleForgetPassword = async (e) => {
    e.preventDefault();
    const api = await Forget({ email });
    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      setError("");
      navigate("/otp-verify", {
        state: email,
      });
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
      <Header title={"Forget Password"} />
      <div className="container-fluid contact ">
        <div className="container pt-5">
          <div className="p-2 p-md-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <Lottie
                  options={{
                    animationData: forgetpassword,
                  }}
                />
              </div>
              <div className="col-12 col-md-6">
                {error != "" && <Showmessage message={error} status="fail" />}

                <h3 className="mb-1  ">Forget Password?</h3>

                <p className="mb-2 stock">
                  Enter your e-mail address, and we'll give you reset
                  instruction.
                </p>

                <form action="" onSubmit={handleForgetPassword}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="text"
                    className="  w-100  form-control border-1 py-2 mb-3"
                    placeholder="Your Email"
                  />
                  <button
                    className="mx-auto w-100 mb-2 btn form-control  py-2 bg-secondary text-white stock "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <Link to="/login" className="stock createhere text-secondary">
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

export default Forgetpassword;
