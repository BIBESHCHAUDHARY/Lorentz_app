import { Navigate, Outlet } from "react-router-dom";
import AuthRole from "./AuthRole";
import { useSelector } from "react-redux";

const UserAuthRole = () => {
  const { isAdmin, status } = AuthRole();
  const token = useSelector((state) => state?.auth?.accessToken);

  return !isAdmin && status == "user" && token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserAuthRole;
