import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../redux/Api/admin/AdminCategory";
import Showmessage from "../../components/common/Showmessage";

function Category() {
  const { data: Api, refetch } = useGetCategoryQuery();
  const categorys = Api?.data;
  const [deleteCategory] = useDeleteCategoryMutation();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(categorys?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = categorys?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDelete = async (id) => {
    if (confirm("Do you want to delete this Category?") == true) {
      await deleteCategory(id);
      setMessage("Delete Category Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };
  const selectUpdateData = (item) => {
    navigate("/admin/category/addcategory", {
      state: item,
    });
  };

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 ">
        <h1 className="fs-5 fw-bold mt-3">Category List</h1>
        <NavLink
          to="/admin/category/addcategory"
          className="btn btn-primary text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add Category
        </NavLink>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      <div className="table-responsive card p-3 ">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th className="text-dark">S.N</th>
              <th className="text-dark">Category Name</th>
              <th className="text-dark">Image</th>
              <th className="text-dark"> Order Number</th>

              <th className="text-dark">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts &&
              displayedProducts?.map((product, index) => (
                <tr key={product.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{product?.title}</td>
                  <Link to={`http://localhost:8000/uploads/${product?.image}`}>
                    <img
                      className="adminImage"
                      src={`http://localhost:8000/uploads/${product?.image}`}
                      st
                      alt="randomImage"
                    />
                  </Link>
                  <td>{product?.order}</td>
                  <td>
                    <i
                      className="bi bi-pencil-square adminactionupdate"
                      onClick={() => selectUpdateData(product)}
                    ></i>
                    <i
                      className="bi bi-trash ps-3 adminactiondelete"
                      onClick={() => handleDelete(product._id)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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
    </main>
  );
}

export default Category;
