import React, { useEffect } from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import SearchModal from "../components/SearchModal";
import Lottie from "react-lottie";
import NotfoundLottie from "../img/404.json";

function Notfound() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <SearchModal />
      <Header title={""} />
      <div className="container-fluid contact">
        <div className="container d-flex flex-column align-items-center">
          <div className="lottie-container">
            <Lottie
              options={{
                animationData: NotfoundLottie,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={400}
              height={300}
            />
          </div>
          <p className="notfound-text">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <NavLink
            to="/"
            className="mt-4 btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
            type="button"
          >
            Back To Homepage
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Notfound;
