import React from "react";
import { Link, replace, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Slice/AuthSlice";
import { useUserInfoQuery } from "../../../redux/Api/AuthApi";

function Header() {
  const { data } = useUserInfoQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login", replace);
  };
  return (
    <header
      className=" mylayout d-flex align-items-center justify-content-between text-dark "
      style={{
        height: "80px",
        borderBottom: "1px solid red",
      }}
    >
      <div className="d-flex align-items-center">
        <h5 className=""></h5>
      </div>

      <div className="d-flex align-items-center">
        <div className="dropdown">
          <button
            className="border-0 text-dark bg-white text-decoration-none dropdown-toggle"
            id="profileDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {data?.data?.email}
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
            <li>
              <button
                onClick={() => navigate("/admin/changepassword")}
                className="dropdown-item"
              >
                Change Password
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="dropdown-item" href="#">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
