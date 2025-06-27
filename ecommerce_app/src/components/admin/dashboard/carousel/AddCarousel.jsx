import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  useAddCarouselMutation,
  useUpdateCarouselMutation,
} from "../../../../redux/Api/admin/AdminCarousel";
import Showmessage from "../../../common/Showmessage";
import { constant } from "../../../common/constant";
import { useGetCategoryQuery } from "../../../../redux/Api/admin/AdminCategory";

function AddCarousel() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [images, setImages] = useState([]);
  const [imagesToRemove, setImagesToRemove] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const imagesRef = useRef([]);
  console.log(images);

  const [ADDCAROUSEL] = useAddCarouselMutation();
  const [UPDATECAROUSEL] = useUpdateCarouselMutation();
  const { data, refetch } = useGetCategoryQuery();

  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setSubtitle(state.subtitle);
      setImages(state.carsoualimage || []);
    }
  }, [state]);

  const handleImageChange = (index, event) => {
    if (event.target.files[0]) {
      const newImages = [...images];
      newImages[index] = event.target.files[0];
      setImages(newImages);
    }
  };

  const addMoreImages = () => {
    if (images.length < 5) {
      setImages([...images, null]);
    }
  };

  const removeImage = (index) => {
    if (images[index] instanceof File) {
      setImages(images.filter((_, i) => i !== index));
    } else {
      setImagesToRemove([...imagesToRemove, images[index]]);
      setImages(images.filter((_, i) => i !== index));
    }
  };

  const handleAddForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);

    images.forEach((image) => {
      if (image instanceof File) {
        formData.append("image", image);
      }
    });

    const api = await ADDCAROUSEL(formData);
    handleApiResponse(api);
  };

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);

    images.forEach((image) => {
      if (image instanceof File) {
        formData.append("image", image);
      }
    });

    if (imagesToRemove.length > 0) {
      formData.append("imagesToRemove", JSON.stringify(imagesToRemove));
    }

    await UPDATECAROUSEL({
      id: state._id,
      data: formData,
    });
    navigate("/admin/carousel");
  };

  return (
    <main>
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state ? "Update Carousel" : "Add Carousel"}
          </h5>
        </div>

        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}

        <div className="card-body">
          <form onSubmit={state ? handleUpdateForm : handleAddForm}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control p-3 bg-light"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Sub Title</label>
                <input
                  type="text"
                  className="form-control p-3 bg-light"
                  placeholder="Enter sub title"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Images (Max 5)</label> <br />
                <div className="d-flex gap-5">
                  {images.map((image, index) => {
                    return (
                      <div key={index} className=" mx-10 mb-3">
                        {typeof image === "string" || image instanceof File ? (
                          <div className="d-flex flex-column gap-1">
                            <img
                              src={
                                image instanceof File
                                  ? URL.createObjectURL(image)
                                  : `${constant.IMAGEURL}/${image}`
                              }
                              alt="Existing"
                              className="img-thumbnail"
                              style={{
                                height: "100px",
                                width: "100px",
                                objectFit: "cover",
                              }}
                            />

                            <button
                              type="button"
                              className="btn border"
                              onClick={() => removeImage(index)}
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <>
                            <br />
                            <input
                              type="file"
                              className="form-control p-3 bg-light"
                              ref={(el) => (imagesRef.current[index] = el)}
                              onChange={(e) => handleImageChange(index, e)}
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
                {images.length < 5 && (
                  <button
                    type="button"
                    className="btn btn-primary text-white"
                    onClick={addMoreImages}
                  >
                    {images.length == 0 ? " Add Image" : " Add More Images"}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Carousel" : "Add Carousel"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddCarousel;
