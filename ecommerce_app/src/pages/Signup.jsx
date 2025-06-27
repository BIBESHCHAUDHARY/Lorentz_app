import React, { useEffect } from "react";
import Header from "../components/Header";
import Signupform from "../components/signup/Signupform";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  const state = useSelector((state) => state?.auth?.accessToken);

  useEffect(() => {
    if (state) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header title="Sign Up" />
      <div className="container-fluid  ">
        <div className="container pt-5">
          <div className="p-2 p-md-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-lg-7 ">
                <Signupform />
              </div>
              <div className="d-none d-lg-block col-lg-5">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  src="https://media.istockphoto.com/id/1410326505/photo/office-girls-hands-typing-input-data.jpg?s=1024x1024&w=is&k=20&c=Wj5uaDM2m9UDNCYZPK0_qTIU9IYBVQiId1HH2LvXM4g="
                  alt="randomImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

//
