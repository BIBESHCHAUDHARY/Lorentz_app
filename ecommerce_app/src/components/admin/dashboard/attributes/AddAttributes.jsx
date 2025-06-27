import React, { useEffect, useState } from "react";
import {
  useAddAttributeMutation,
  useUpdateAttributeMutation,
} from "../../../../redux/Api/admin/AdminAttribute";
import Showmessage from "../../../common/Showmessage";
import { useLocation } from "react-router";

function AddAttributes() {
  const { state } = useLocation();
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // api
  const [ADDATTRIBUTE] = useAddAttributeMutation();
  const [UPDATEATTRIBUTE] = useUpdateAttributeMutation();

  const addAttribute = async (e) => {
    e.preventDefault();
    const api = await ADDATTRIBUTE({ title });
    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
    }
  };

  const updateAttribute = async (e) => {
    e.preventDefault();
    const attribute = {
      id: state._id,
      data: {
        title: title,
      },
    };
    const api = await UPDATEATTRIBUTE(attribute);
    if (api?.error) {
      setError(api?.error?.data?.message);
    } else {
      setSuccess(api?.data?.message);
      setTitle("");
    }
  };
  useEffect(() => {
    if (state) {
      setTitle(state.title);
    }
  }, [state]);
  return (
    <main className="">
      <div className="card shadow-sm  mt-4">
        <div className="card-header bg-white ">
          <h5 className="text-primary  my-3 ">
            {state ? "Update Attribute" : "Add Attribute"}
          </h5>
        </div>
        {error && <Showmessage status="fail" message={error} />}
        {success && <Showmessage status="success" message={success} />}
        <div className="card-body">
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <label htmlFor="categoryName" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control p-3 bg-light"
                  placeholder="Enter attribute title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={state ? updateAttribute : addAttribute}
                type="submit"
                className="btn btn-primary text-white py-2"
              >
                {state ? "Update Attribute" : "Add Attribute"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddAttributes;
