import React from "react";
import { Link } from "react-router";
import SidebarImage from "../../../img/Sidebarlogo.png";

function Sidebar() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#2a3042",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={SidebarImage}
          alt=""
          style={{
            width: 80,
            height: 80,
            color: "white",
          }}
        />
      </div>
      <ul className="nav flex-column">
        <p className=" my-3 fw-bold titleofsidebar">DASHBOARD</p>
        <li className="nav-item  ">
          <Link
            to="/admin"
            className=" d-flex align-items-center  navitemofsidebar"
          >
            <i className="bi bi-house me-2"></i> Dashboard
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">Category</p>
        <li className="nav-item">
          <Link
            to="/admin/category"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Category
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/subcategory"
            className=" d-flex align-items-center navitemofsidebar"
          >
            <i className="bi bi-people me-2"></i>Sub Category
          </Link>
        </li>
        <p className=" my-3 fw-bold titleofsidebar">PRODUCT</p>
        <li className="nav-item ">
          <Link
            to="/admin/product"
            className=" d-flex align-items-center navitemofsidebar"
          >
            <i className="bi bi-people me-2"></i> Product
          </Link>
        </li>
        <p className=" my-3 fw-bold titleofsidebar">ATTRIBUTE</p>
        <li className="nav-item ">
          <Link
            to="/admin/attribute"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Attributes
          </Link>
          <Link
            to="/admin/subattribute"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i>Sub Attributes
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">BANNER</p>
        <li className="nav-item ">
          <Link
            to="/admin/carousel"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Carousel
          </Link>
        </li>
        <li className="nav-item ">
          <Link
            to="/admin/banner"
            className=" d-flex align-items-center navitemofsidebar"
          >
            <i className="bi bi-people me-2"></i> Banner
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">Testimonial</p>
        <li className="nav-item ">
          <Link
            to="/admin/testimonial"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Testimonial
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">USER</p>
        <li className="nav-item ">
          <Link
            to="/admin/users"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Users
          </Link>
        </li>

        <p className=" my-3 fw-bold titleofsidebar">ORDER</p>
        <li className="nav-item ">
          <Link
            to="/admin/pending/orders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Pending Orders
          </Link>
          <Link
            to="/admin/confirm/orders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Accepted Orders
          </Link>
          <Link
            to="/admin/onthedelivery/orders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> On Delivery Orders
          </Link>
          <Link
            to="/admin/delivered/orders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Delivered Orders
          </Link>
          <Link
            to="/admin/canceled/orders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> Canceled Orders
          </Link>
          <Link
            to="/admin/allorders"
            className=" d-flex align-items-center navitemofsidebar mb-2"
          >
            <i className="bi bi-people me-2"></i> All Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
