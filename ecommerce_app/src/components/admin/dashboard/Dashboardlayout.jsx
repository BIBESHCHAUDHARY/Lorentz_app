import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Header from "./Header";

function Dashboardlayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row gap-0">
          <nav
            className="p-0 d-none d-md-block bg-light"
            style={{
              width: "200px",
              height: "100vh",
              position: "sticky",
              top: "0",
            }}
          >
            <Sidebar />
          </nav>
          <div className="col-md-9  col-lg-10 ">
            <Header style={{ paddingLeft: 0, paddingRight: 0 }} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardlayout;
