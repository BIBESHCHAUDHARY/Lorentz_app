import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../redux/Api/admin/AdminProduct";
import Showmessage from "../../components/common/Showmessage";

function Product() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: PRODUCTS, refetch } = useGetProductQuery();
  const products = PRODUCTS?.data;
  const [DELETEPRODUCT] = useDeleteProductMutation();
  const [message, setMessage] = useState("");

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products?.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const DELETE = async (id) => {
    if (confirm("Do you want to delete this Product?") == true) {
      await DELETEPRODUCT(id);
      setMessage("Delete Product Successfully.");
      refetch();
    } else {
      setMessage("");
    }
  };

  const selectUpdate = (product) => {
    navigate("/admin/product/addproduct", {
      state: product,
    });
  };

  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1 className="fs-5 fw-bold mt-3">Product List</h1>
        <Link
          to="/admin/product/addproduct"
          className="btn btn-primary  text-white py-2"
        >
          <i className="bi bi-plus me-2"></i>Add Product
        </Link>
      </div>

      <div className="d-flex gap-2 w-50 mb-4">
        <input
          type="text"
          className="productinput my-2"
          placeholder="Search for a product..."
          aria-label="Search"
        />
        <button
          className="btn-primary text-white productbotton my-2"
          type="button"
        >
          Search
        </button>
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      <div className="table-responsive card p-3">
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Price After Discount</th>
              <th>Stock</th>
              <th>Main Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts?.map((product, index) => (
              <tr key={product.id}>
                <td>{startIndex + index + 1}</td>
                <td>{product.title}</td>
                <td>{product.category.title}</td>
                <td>{product.price}</td>
                <td>{product.priceafterdiscount}</td>
                <td>{product.stock}</td>
                <Link
                  to={`http://localhost:8000/uploads/${product?.mainimage}`}
                >
                  <img
                    className="adminImage"
                    src={`http://localhost:8000/uploads/${product?.mainimage}`}
                    st
                    alt="randomImage"
                  />
                </Link>
                <td>
                  <i
                    onClick={() => selectUpdate(product)}
                    className="bi bi-pencil-square adminactionupdate"
                  ></i>
                  <i
                    onClick={() => DELETE(product._id)}
                    className="bi bi-trash ps-3 adminactiondelete"
                  ></i>
                  <i
                    onClick={() =>
                      navigate(`/admin/product/${product._id}`, {
                        state: product,
                      })
                    }
                    className="fas ps-3 fa-eye adminactionupdate"
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

export default Product;
