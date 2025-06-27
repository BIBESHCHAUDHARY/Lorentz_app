import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import {
  useDeleteAttributeMutation,
  useGetAttributeQuery,
} from "../../redux/Api/admin/AdminAttribute";
import Showmessage from "../../components/common/Showmessage";

function Attributes() {
  const navigate = useNavigate();
  // api
  const { data: API, refetch } = useGetAttributeQuery();
  const [DELETEATTRIBUTE] = useDeleteAttributeMutation();
  const [message, setMessage] = useState("");

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Category?") == true) {
      await DELETEATTRIBUTE(id);
      setMessage("Delete Category Successfully.");
    } else {
      setMessage("");
    }
  };

  const selectUpdateData = (item) => {
    navigate("/admin/attribute/addattribute", {
      state: item,
    });
  };

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Attributes</h1>
        <NavLink
          to="/admin/attribute/addattribute"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add New Attributes
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Title</th>
              <th className="text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {API?.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <i
                      onClick={() => selectUpdateData(item)}
                      className="bi bi-pencil-square adminactionupdate"
                    ></i>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="bi bi-trash ps-3 adminactiondelete"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Attributes;
