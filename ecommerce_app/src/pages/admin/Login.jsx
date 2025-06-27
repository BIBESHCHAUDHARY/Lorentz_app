import React, { useState } from "react";
import { useNavigate } from "react-router";

import Showmessage from "../../components/common/Showmessage";
import LoadingButton from "../../components/common/LoadingButton";
import { useLoginAdminMutation } from "../../redux/Api/admin/AdminLogin";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/Slice/AuthSlice";

function LoginAdmin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [LOGINUSER, { isLoading }] = useLoginAdminMutation();
  const navigate = useNavigate();
  const handleLoginform = async (e) => {
    e.preventDefault();
    const api = await LOGINUSER({
      email,
      password,
    });

    if (api.error) {
      setError(api.error?.data?.message);
    } else {
      const { accessToken, refreshToken } = api?.data;
      dispatch(
        setCredentials({ accessToken: accessToken, refreshToken: refreshToken })
      );
      setError("");
      navigate("/admin");
    }
  };

  return (
    <div className="adminlogin">
      <h2>Login for Dashboard</h2>
      <form className="w-50" action="" onSubmit={handleLoginform}>
        {error != "" && <Showmessage message={error} status="fail" />}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Enter Your Email *"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          className="w-100 form-control border-1 py-3 mb-4"
          placeholder="Enter Your Password *"
        />
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex flex-row align-items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              id=""
              style={{ verticalAlign: "middle" }}
            />
            <p style={{ margin: 0 }}>Remember me</p>
          </div>
        </div>
        <button
          className="w-100 btn form-control border-secondary py-3 bg-white text-dark "
          type="submit"
        >
          {isLoading ? <LoadingButton /> : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
