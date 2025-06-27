import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  useDeleteProductMutation,
  useMyProductQuery,
} from "../redux/Api/admin/AdminProduct";
import Showmessage from "../components/common/Showmessage";
import { itemperPageforUser } from "../components/common/constant";
import Lottie from "react-lottie";
import usernotfound from "../img/usernotfound.json";

function MyProduct() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: PRODUCTS, refetch } = useMyProductQuery();
  const products = PRODUCTS?.data.filter((item) => {
    if (search == "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }
  });
  const [DELETEPRODUCT] = useDeleteProductMutation();
  const [message, setMessage] = useState("");

  const itemsPerPage = itemperPageforUser;
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
    navigate("/account/addproduct", {
      state: product,
    });
  };

  useEffect(() => {
    refetch();
  }, []);
  if (displayedProducts?.length == 0) {
    return (
      <div className="container-fluid">
        <div className="container d-flex flex-column align-items-center">
          <p className="stock text-primary fw-bold text-center">
            You haven't add any products.
          </p>
        </div>
      </div>
    );
  }
  return (
    <main className="">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h3 className=" ">My Products List</h3>
      </div>

      <div className="d-flex gap-2 w-50 mb-1">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="productinput my-2"
          placeholder="Search for a product..."
          aria-label="Search"
        />
      </div>
      {message != "" && <Showmessage message={message} status={"success"} />}
      <div className="table-responsive card p-3">
        {displayedProducts?.length == 0 && search != "" ? (
          <Lottie
            style={{ width: 250 }}
            options={{
              animationData: usernotfound,
            }}
          />
        ) : (
          <table className="table table-bordered table-sm stock">
            <thead>
              <tr>
                <th className="text-primary">S.N</th>
                <th className="text-primary">Title</th>
                <th className="text-primary">Category</th>
                <th className="text-primary">Price</th>
                <th className="text-primary">Price After Discount</th>

                <th className="text-primary">Main Image</th>
                <th className="text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts?.map((product, index) => (
                <tr key={product?._id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{product?.title}</td>
                  <td>{product?.category?.title}</td>
                  <td>{product.price}</td>
                  <td>{product.priceafterdiscount}</td>

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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {displayedProducts?.length != 0 && (
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

export default MyProduct;
