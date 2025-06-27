import React from "react";
import { Link } from "react-router";
import CartPage from "../img/header.jpg";

function Header({ title }) {
  return (
    <div
      className="container-fluid page-header headerbackground py-5  "
      style={{
        backgroundImage: `url(${CartPage})`,
      }}
    >
      <h3 className="text-center text-white ">{title}</h3>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link className="fw-bold subtitlehero" to="/">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item text-white subtitlehero">Pages</li>
        <li className="breadcrumb-item active text-white subtitlehero">
          {title}
        </li>
      </ol>
    </div>
  );
}

export default Header;
