import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const AuthRole = () => {
  const token = useSelector((state) => state?.auth?.accessToken);

  let isAdmin = false;
  let status = "user";
  if (token) {
    const decoded = jwtDecode(token);
    const { role } = decoded;
    isAdmin = role.includes("admin");
    if (isAdmin) status = "admin";
    return { role, status, isAdmin };
  }
  return { role: [], status, isAdmin };
};

export default AuthRole;
