import React, { useEffect, useState } from "react";
import { useGetAttributeQuery } from "../../../../redux/Api/admin/AdminAttribute";
import {
  useAddSubAttributeMutation,
  useUpdateSubAttributeMutation,
} from "../../../../redux/Api/admin/AdminSubAttribute";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router";

function AddSubAttributes() {
  const { state } = useLocation();
  const { data: API } = useGetAttributeQuery();
  const [UPDATESUB] = useUpdateSubAttributeMutation();
  const [ADDSUB] = useAddSubAttributeMutation();
  const [names, setNames] = useState([""]);
  const [attribute, setAttribute] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleAddName = () => {
    setNames([...names, ""]);
  };

  const handleRemoveName = (index) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  const handleAddForm = async (e) => {
    e.preventDefault();
    const api = await ADDSUB({
      attribute: attribute,
      title: names,
    });
    if (api.error) {
      setError(api.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Sub Attribute Added Successfully..");
      setAttribute("");
      setNames([""]);
    }
  };

  useEffect(() => {
    if (state) {
      setAttribute(state.attribute._id);
      setNames(state.title);
    }
  }, [state]);

  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const item = {
      id: state._id,
      data: {
        attribute: attribute,
        title: names,
      },
    };
    const api = await UPDATESUB(item);
    if (api.error) {
      setError(api.error?.data?.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Sub Attribute Updated Successfully..");
      setAttribute("");
      setNames([""]);
    }
  };

  return (
    <main className="">
      <div className="card shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="text-primary my-3">
            {state ? "Update Sub Attribute" : "Add Sub Attribute"}
          </h5>
        </div>
        {error && <Showmessage message={error} status={"fail"} />}
        {success && <Showmessage message={success} status={"success"} />}
        <div className="card-body">
          <form onSubmit={state ? handleUpdateForm : handleAddForm}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="attributes" className="form-label">
                  Attributes
                </label>
                <select
                  required
                  value={attribute}
                  onChange={(e) => setAttribute(e.target.value)}
                  className="form-control p-3 bg-light"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Select Attribute
                  </option>
                  {API?.data.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="images" className="form-label">
                  Titles
                </label>
                {names.map((name, index) => (
                  <div key={index} className="input-group mb-3">
                    <input
                      type="text"
                      id={`name-${index}`}
                      className="form-control p-3 bg-light"
                      placeholder="Enter sub attribute title"
                      value={name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                      required
                    />
                    {names.length > 1 && (
                      <i
                        className="fas fa-minus-circle text-white btn btn-success pt-3"
                        onClick={() => handleRemoveName(index)}
                      ></i>
                    )}
                  </div>
                ))}
                <i
                  className="fas fa-plus-circle text-white w-25 btn btn-primary"
                  onClick={handleAddName}
                >
                  <span className="ps-2"> Add More</span>
                </i>
              </div>
            </div>
            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary text-white py-2">
                {state ? "Update Sub Attibute" : "Add Sub Attibute"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddSubAttributes;
