import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import BannerModal from "../../components/admin/dashboard/AdminDataModal";
import {
  useDeleteBannerMutation,
  useGetBannerQuery,
} from "../../redux/Api/admin/AdminBanner";
import Showmessage from "../../components/common/Showmessage";

function Banner() {
  const navigate = useNavigate();
  const { data: BANNER, refetch } = useGetBannerQuery();
  const [DELETEBANNER] = useDeleteBannerMutation();
  const [selectItem, setSelectItem] = useState(null);
  const [message, setMessage] = useState("");

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Banner?") == true) {
      await DELETEBANNER(id);
      setMessage("Delete Banner Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };

  const selectUpdateData = (item) => {
    navigate("/admin/banner/addbanner", {
      state: item,
    });
  };

  return (
    <main className="">
      <BannerModal data={selectItem} type="banner" />
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Banner List</h1>
        {BANNER?.data?.length === 0 && (
          <NavLink
            to="/admin/banner/addbanner"
            className="btn btn-primary text-white py-2"
          >
            <i className="bi bi-plus me-2"></i>Add Banner
          </NavLink>
        )}
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {BANNER?.data?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Banner</p>
      ) : (
        <div className="table-responsive card p-3 ">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th className="text-dark">S.N</th>
                <th className="text-dark">Title</th>
                <th className="text-dark">Subtitle</th>
                <th className="text-dark">Price</th>
                <th className="text-dark">Weight</th>
                <th className="text-dark">Action</th>
              </tr>
            </thead>
            <tbody>
              {BANNER?.data.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.title}</td>
                    <td>{item?.subtitle}</td>
                    <td>{item?.price}</td>
                    <td>{item?.weight}</td>
                    <td>
                      <i
                        onClick={() => selectUpdateData(item)}
                        className="bi bi-pencil-square adminactionupdate"
                      ></i>
                      <i
                        onClick={() => handleDelete(item?._id)}
                        className="bi bi-trash ps-3 adminactiondelete"
                      ></i>

                      <i
                        onClick={() => setSelectItem(item)}
                        className="fas ps-3 fa-eye adminactionupdate"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default Banner;
