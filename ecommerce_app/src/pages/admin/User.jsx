import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Lottie from "react-lottie";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
} from "../../redux/Api/admin/AdminUser";
import usernotfound from "../../img/usernotfound.json";
import Showmessage from "../../components/common/Showmessage";

function User() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const { data: API, refetch } = useAllUsersQuery();
  const User = API?.data;
  const [DELETEUSER] = useDeleteUserMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const filteredUsers = User?.filter((item) => {
    if (search == "") {
      return item;
    } else {
      return (
        item.fullname.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search)
      );
    }
  });
  const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayUsers = filteredUsers?.slice(startIndex, endIndex);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const deletUser = async (id) => {
    if (confirm("Do you want to delete this User?") == true) {
      await DELETEUSER(id);
      setMessage("Delete Category Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };

  const selectUpdate = (data) => {
    navigate("/admin/users/updateuser", {
      state: data,
    });
  };

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1 className="fs-5 fw-bold mt-3">Users List</h1>
        <Link
          to="/admin/users/adduser"
          className="btn btn-primary  text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add User
        </Link>
      </div>

      <div className="d-flex gap-2 w-50 mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="productinput my-2"
          placeholder="Search for a user..."
          aria-label="Search"
        />
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      <div className="table-responsive card p-3">
        {displayUsers?.length == 0 && search != "" ? (
          <>
            <Lottie
              style={{ width: 250 }}
              options={{
                animationData: usernotfound,
              }}
            />
          </>
        ) : (
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers?.map((item, index) => (
                <tr key={item._id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>
                    <i
                      onClick={() => selectUpdate(item)}
                      className="bi bi-pencil-square adminactionupdate"
                    ></i>
                    <i
                      onClick={() => deletUser(item._id)}
                      className="bi bi-trash ps-3 adminactiondelete"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {displayUsers?.length != 0 && (
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="align-self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-primary"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default User;
