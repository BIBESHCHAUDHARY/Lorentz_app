import React, { useEffect } from "react";
import { useUserInfoQuery } from "../redux/Api/AuthApi";

function Profile() {
  const { data: User, refetch } = useUserInfoQuery();
  const user = User?.data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    refetch();
  }, []);
  return (
    <>
      <h3>My details</h3>
      <p className="text-muted fw-bold">Personal Information</p>

      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label for="firstName" className="form-label stock">
              Full Name
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="firstName"
              value={user?.fullname}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label stock">
              Email
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="secondName"
              value={user?.email}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label for="secondName" className="form-label stock">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control border-1 py-2 mb-4"
              id="secondName"
              value={user?.phone}
              disabled
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Profile;
