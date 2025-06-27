import React from "react";
import Sidebox from "./Sidebox";
import { Outlet } from "react-router";
import Header from "../Header";

function ProfileLayout() {
  return (
    <>
      <Header title="Profile" />
      <div className="container ">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3  rounded-1 vh-100  p-3 bg-light ">
              <Sidebox />
            </div>
            <div className="col-md-9 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
