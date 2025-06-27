import React, { useState } from "react";
import { useLocation } from "react-router";
import { constant } from "../../../common/constant";
import { useUserInfoQuery } from "../../../../redux/Api/AuthApi";

function Productdetail() {
  const { state } = useLocation();

  const [select, setSelect] = useState(0);

  return (
    <>
      <p className="card-title my-2 fs-1 text-dark fw-bold px-2">
        {state?.title}
      </p>

      <div className="card">
        <div className="d-flex gap-5 px-2 py-2">
          <div>
            <div className="d-flex gap-2">
              <img
                // src={`${constant.IMAGEURL}/${state.mainimage}`}
                src={`${constant.IMAGEURL}/${state.images[select]}`}
                className="cardImage"
                alt="randomImage"
              />
              <div className="d-flex flex-column ">
                {state.images.map((item, index) => {
                  return (
                    <img
                      onMouseEnter={() => {
                        setSelect(index);
                      }}
                      key={index}
                      src={`${constant.IMAGEURL}/${item}`}
                      className="cardImage2 mb-1"
                      style={{
                        border: select == index ? "1px solid red" : "",
                      }}
                      alt="randomImage"
                    />
                  );
                })}
              </div>
            </div>
            <div className="d-flex gap-2">
              <p className=" text-dark fw-bold">
                Rs {state?.priceafterdiscount}
              </p>
              <p className="priceline fw-bold">
                <s>Rs {state?.price}</s>
              </p>
            </div>
            <div className="table-responsive mt-2">
              <p className="mb-2 ">
                <u>More Information</u>
              </p>
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Stock</th>
                    <th>Attribute with sub-attributes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{state.category.title}</td>
                    <td>{state.subCategory.title}</td>
                    <td>{state.stock}</td>
                    <td>
                      {state.attributes.map((item, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <p>{item.title.title}:</p>
                          {item.values.map((value, valueIndex) => (
                            <p key={valueIndex}>[{value}]</p>
                          ))}
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: state?.description }} />
        </div>

        <div className="card-body">
          {/* Scroll into view when description is shown */}
        </div>
      </div>
    </>
  );
}

export default Productdetail;
