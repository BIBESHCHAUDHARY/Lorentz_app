import React, { useState, useRef, useEffect } from "react";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router";
import { useGetCategoryQuery } from "../../../../redux/Api/admin/AdminCategory";
import {
  useAddSubCategoryMutation,
  useUpdateSubCategoryMutation,
} from "../../../../redux/Api/admin/AdminSubCategory";

function AddSubCategory() {
  const { state } = useLocation();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { data: CATEGORY } = useGetCategoryQuery();
  const [ADDSUBCATEGORY] = useAddSubCategoryMutation();
  const [UPDATESUBCATEGORY] = useUpdateSubCategoryMutation();

  console.log(category);

  const addCategoryForm = async (e) => {
    e.preventDefault();
    const api = await ADDSUBCATEGORY({
      title,
      category,
    });
    if (api?.error) {
      setError(api?.error?.data?.message);
      setSuccess("");
    } else {
      setSuccess(api?.data?.message);
      setError("");
      setTitle("");
      setCategory("");
    }
  };

  const updateCategoryForm = async (e) => {
    e.preventDefault();
    const subcategory = {
      id: state._id,
      data: {
        category,
        title,
      },
    };
    const api = await UPDATESUBCATEGORY(subcategory);
    if (api?.error) {
      setError(api?.error?.data?.message);
      setSuccess("");
    } else {
      setSuccess(api?.data?.message);
      setError("");
      setTitle("");
      setCategory("");
    }
  };
  useEffect(() => {
    if (state) {
      setTitle(state?.title);
      setCategory(state?.category?._id);
    }
  }, [state]);

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state != null ? "Update Sub Category" : "Add New Sub Category"}
          </h5>
        </div>

        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={state ? updateCategoryForm : addCategoryForm}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="form-control  bg-light"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {CATEGORY?.data.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Sub Category Title
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control  bg-light"
                  placeholder="Enter sub category title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Sub Category" : "Add Sub Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddSubCategory;
