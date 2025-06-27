import { Navigate, Outlet } from "react-router-dom";
import AuthRole from "./AuthRole";
import { useSelector } from "react-redux";

const AdminAuthRole = () => {
  const { isAdmin } = AuthRole();
  const token = useSelector((state) => state?.auth?.accessToken);

  return isAdmin && token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminAuthRole;
