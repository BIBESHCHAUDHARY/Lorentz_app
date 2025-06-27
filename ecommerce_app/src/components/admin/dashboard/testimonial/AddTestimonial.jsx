import React, { useEffect, useRef, useState } from "react";
import {
  useAddTestimonialMutation,
  useGetTestimonialQuery,
  useUpdateTestimonialMutation,
} from "../../../../redux/Api/admin/AdminTestimonial";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router-dom";

function AddTestimonial() {
  const { state } = useLocation();
  const [selectImage, setSelectImage] = useState(null);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imageRef = useRef();

  const { data, refetch } = useGetTestimonialQuery();
  const [TESTIMONIAL] = useAddTestimonialMutation();
  const [TESTIMONIALUPDATE] = useUpdateTestimonialMutation();

  const addTestimonial = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profession", profession);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("image", selectImage[0]);
    const api = await TESTIMONIAL(formData);
    console.log(api);
    if (api?.error) {
      setError(api?.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess(api?.data?.message);
      setName("");
      setProfession("");
      setdescription("");
      setrating("");
      setSelectImage(null);
      if (imageRef.current) {
        imageRef.current.value = null;
      }
    }
  };
  useEffect(() => {
    if (state) {
      setName(state.name);
      setProfession(state.profession);
      setdescription(state.description);
      setrating(state.rating);
      setSelectImage(
        state.image ? `http://localhost:8000/uploads/${state.image}` : null
      );
    }
  }, [state]);

  const updateTestimonial = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profession", profession);
    formData.append("rating", rating);
    formData.append("description", description);
    if (selectImage instanceof File) {
      formData.append("image", selectImage);
    }
    const testimonial = {
      id: state._id,
      data: formData,
    };
    const api = await TESTIMONIALUPDATE(testimonial);
    if (api?.error) {
      setError(api?.error?.data?.message);
      setSuccess("");
    } else {
      setSuccess(api?.data?.message);
      setError("");
      refetch();
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">
            {state != null ? "Update Testimonial" : "Add New Testimonial"}
          </h5>
        </div>
        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}
        <div className="card-body">
          <form onSubmit={state ? updateTestimonial : addTestimonial}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Profession
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter profession"
                  required
                  onChange={(e) => setProfession(e.target.value)}
                  value={profession}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  id="Description"
                  className="form-control p-3 bg-light"
                  placeholder="Enter description"
                  required
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="categoryName" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  id="categoryName"
                  className="form-control p-3 bg-light"
                  placeholder="Enter rating"
                  required
                  onChange={(e) => setrating(e.target.value)}
                  value={rating}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="iconImage" className="form-label">
                  Image
                </label>
                <div className="input-group">
                  <input
                    onChange={(e) => setSelectImage(e.target.files[0])}
                    type="file"
                    className="form-control p-3 bg-light"
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
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Banner" : "Add Banner"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddTestimonial;
