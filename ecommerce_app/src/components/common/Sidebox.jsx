import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { logout } from "../../redux/Slice/AuthSlice";
import { toast } from "react-toastify";

function Sidebox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sideBar = [
    {
      id: 0,
      name: "My Profile",
      link: "profile",
    },
    {
      id: 1,
      name: "My Carts",
      link: "cart",
    },
    {
      id: 2,
      name: "My Orders",
      link: "order",
    },
    {
      id: 3,
      name: "Change Password",
      link: "oldpassword",
    },
    {
      id: 4,
      name: "Add Product",
      link: "addproduct",
    },
    {
      id: 5,
      name: "My Product",
      link: "myproduct",
    },

    {
      id: 6,
      name: "Order For My Products",
      link: "orderlist",
    },
  ];
  return (
    <div>
      <ul className="nav  flex-column">
        {sideBar.map((item) => {
          return (
            <li className="nav-item profilemyactive mb-2">
              <NavLink
                className={`nav-link text-primary hello stock`}
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
        <li className="nav-item mb-2">
          <button
            onClick={() => {
              navigate("/");
              dispatch(logout());
              toast.success("Logout Successfully!");
            }}
            className={`nav-link border-0 text-primary bg-transparent stock `}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebox;
