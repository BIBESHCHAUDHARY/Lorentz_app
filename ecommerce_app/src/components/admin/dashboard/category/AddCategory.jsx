import React, { useState, useRef, useEffect } from "react";
import Showmessage from "../../../common/Showmessage";
import {
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../../redux/Api/admin/AdminCategory";
import { useLocation } from "react-router";

function AddCategory() {
  const { state } = useLocation();
  const [selectImage, setSelectImage] = useState(null);
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState(0);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imageRef = useRef();

  const [CATEGORY] = useAddCategoryMutation();
  const [UPDATECATEGORY] = useUpdateCategoryMutation();

  const addCategoryForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("order", order);
    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }

    const api = await CATEGORY(formData);

    if (api?.error) {
      setSuccess("");
      setError(api?.error?.data?.message);
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setTitle("");
      setOrder(0);
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };

  const updateCategoryForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("order", order);

    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }
    const category = {
      id: state._id,
      data: formData,
    };
    const api = await UPDATECATEGORY(category);

    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
      setOrder(0);
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };
  console.log(selectImage);
  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setOrder(state.order);
      setSelectImage(
        state.image ? `http://localhost:8000/uploads/${state.image}` : null
      );
    }
  }, [state]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectImage(e.target.files[0]);
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state != null ? "Update Category" : "Add New Category"}
          </h5>
        </div>

        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={state ? updateCategoryForm : addCategoryForm}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control  bg-light"
                  placeholder="Enter category name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="iconImage" className="form-label">
                  Image
                </label>
                <div className="input-group">
                  <input
                    onChange={handleImageChange}
                    type="file"
                    className="form-control  bg-light"
                    id="iconImage"
                    aria-label="Upload"
                    ref={imageRef}
                  />
                </div>
              </div>

              {selectImage && (
                <div className="mt-3">
                  <h6>Selected Image:</h6>
                  <div className="row g-2">
                    <div className="col-3">
                      <img
                        src={
                          selectImage instanceof File
                            ? URL.createObjectURL(selectImage)
                            : selectImage
                        }
                        alt="Selected"
                        className="img-thumbnail"
                        style={{ maxHeight: "100px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="col-md-6">
                <label htmlFor="orderNumber" className="form-label">
                  Order Number
                </label>
                <input
                  value={order}
                  type="number"
                  id="orderNumber"
                  className="form-control  bg-light"
                  placeholder="Enter order number"
                  onChange={(e) => setOrder(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Category" : "Add Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddCategory;
