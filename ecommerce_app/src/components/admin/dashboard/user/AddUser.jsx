import React, { useState } from "react";
import { useRegistrationMutation } from "../../../../redux/Api/AuthApi";
import Showmessage from "../../../common/Showmessage";

function AddUser() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationpassword, setConfirmationPassword] = useState("");
  const [role, setRole] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [USERREGISTRATION] = useRegistrationMutation();

  const handleAddUser = async (e) => {
    e.preventDefault();

    const api = await USERREGISTRATION({
      fullname,
      email,
      phone,
      password,
      confirmationpassword,
      role: role ? "admin" : "user",
      term: "true",
    });

    if (api.error) {
      setError(api.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("User Registration Successfully.");
      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmationPassword("");
      setRole(false);
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">Add User</h5>
        </div>
        {error && <Showmessage message={error} status={"fail"} />}
        {success && <Showmessage message={success} status={"success"} />}
        <div className="card-body">
          <form onSubmit={handleAddUser}>
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-md-6">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="form-control p-3 bg-light"
                  placeholder="Enter full name"
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control p-3 bg-light"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control p-3 bg-light"
                  placeholder="Enter phone number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control p-3 bg-light"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirmation Password */}
              <div className="col-md-6">
                <label htmlFor="c_password" className="form-label">
                  Confirmation Password
                </label>
                <input
                  type="password"
                  id="c_password"
                  className="form-control p-3 bg-light"
                  placeholder="Enter confirmation password"
                  required
                  value={confirmationpassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                />
              </div>

              {/* Role (Admin/User) */}
              <div className="form-check form-switch m-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={role}
                  onChange={(e) => setRole(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  is Admin
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddUser;
