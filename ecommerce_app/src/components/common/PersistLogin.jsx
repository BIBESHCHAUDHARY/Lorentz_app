import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useRefreshMutation } from "../../redux/Api/AuthApi";
import { logout, setCredentials } from "../../redux/Slice/AuthSlice";

function PersistLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  const [refresh] = useRefreshMutation();

  useEffect(() => {
    const verifyAccessToken = async () => {
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          const currentTime = Date.now() / 1000;
          if (decoded.exp > currentTime) {
            return;
          }
        } catch (error) {
          console.error("Error decoding access token:", error);
        }
      }
      await refreshAccessToken();
    };

    const refreshAccessToken = async () => {
      if (refreshToken) {
        try {
          const response = await refresh().unwrap();
          if (response.accessToken && response.refreshToken) {
            dispatch(setCredentials(response));
          } else {
            dispatch(logout());
            // navigate("/admin/login");
          }
        } catch (err) {
          console.error("Failed to refresh token:", err);
          // navigate("/admin/login");
          dispatch(logout());
        }
      } else {
        // navigate("/admin/login");
        dispatch(logout());
      }
    };

    verifyAccessToken();
  }, [accessToken, refreshToken, refresh, dispatch, navigate]);

  return <Outlet />;
}

export default PersistLogin;
