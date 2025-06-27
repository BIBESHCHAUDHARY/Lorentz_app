import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import {
  useDeleteCarouselMutation,
  useGetCarouselQuery,
} from "../../redux/Api/admin/AdminCarousel";
import { constant } from "../../components/common/constant";
import Showmessage from "../../components/common/Showmessage";

function Carousel() {
  const navigate = useNavigate();
  const { data, refetch } = useGetCarouselQuery();
  const [DELETECAROUSEL] = useDeleteCarouselMutation();
  const [message, setMessage] = useState("");

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Carousel?") == true) {
      await DELETECAROUSEL(id);
      setMessage("Delete Carousel Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };

  const selectCarousel = (data) => {
    navigate("/admin/carousel/addcarousel", {
      state: data,
    });
  };

  useEffect(() => {
    refetch();
  }, []);
  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Carousel</h1>
        {data?.data?.length == 0 && (
          <NavLink
            to="/admin/carousel/addcarousel"
            className="btn btn-primary text-white py-2"
          >
            <i className="bi bi-plus me-2"></i>Add Carousel
          </NavLink>
        )}
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      {data?.data?.length == 0 ? (
        <p className="text-center fw-bold text-primary fs-5">No Carousel</p>
      ) : (
        <div className="table-responsive card p-3 ">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th className="text-dark">S.N</th>
                <th className="text-dark">Title</th>
                <th className="text-dark">Subtitle</th>
                <th className="text-dark">Images</th>

                <th className="text-dark">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.subtitle}</td>
                    <td>
                      {item?.carsoualimage.map((item, index) => {
                        return (
                          <>
                            {index + 1}.
                            <Link
                              key={index}
                              to={`${constant.IMAGEURL}/${item}`}
                            >
                              <img
                                className="adminImage2 pl-2 border-1"
                                src={`${constant.IMAGEURL}/${item}`}
                                alt=""
                              />
                            </Link>
                            <br />
                          </>
                        );
                      })}
                    </td>
                    <td>
                      <i
                        onClick={() => selectCarousel(item)}
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
      )}
    </main>
  );
}

export default Carousel;
