import React from "react";
import { constant } from "../common/constant";

function Productinfo({ items }) {
  const totalprice = Array.isArray(items)
    ? items?.reduce(
        (pre, cur) => pre + cur?.quantity * cur?.product?.priceafterdiscount,
        0
      )
    : items?.quantity * items?.product.priceafterdiscount;

  return (
    <div className="table-responsive">
      <table className="table  border-1">
        <thead>
          <tr className="stock text-primary">
            <th scope="col">SN</th>
            <th scope="col">Products</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(items) ? (
            items?.map((item, index) => (
              <tr key={index}>
                <th className="">{index + 1}.</th>
                <th scope="row">
                  <div className="d-flex align-items-center ">
                    <img
                      src={`${constant?.IMAGEURL}/${item?.product?.mainimage}`}
                      className="img-fluid rounded-circle object-fit-contain "
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </div>
                </th>
                <td className="stock">{item?.product?.title}</td>
                <td className="stock">
                  Rs {item?.product?.priceafterdiscount}
                </td>
                <td className="text-center stock">{item?.quantity}</td>
                <td className="stock">
                  Rs {item?.product?.priceafterdiscount * item.quantity}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th className="">{1}.</th>
              <th scope="row">
                <div className="d-flex align-items-center ">
                  <img
                    src={`${constant?.IMAGEURL}/${items?.product?.mainimage}`}
                    className="img-fluid rounded-circle object-fit-contain "
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                </div>
              </th>
              <td className="stock">{items?.product?.title}</td>
              <td className="stock">Rs {items?.product?.priceafterdiscount}</td>
              <td className="text-center stock">{items?.quantity}</td>
              <td className="stock">
                Rs {items?.product?.priceafterdiscount * items?.quantity}
              </td>
            </tr>
          )}
          <tr className="">
            <td className="">
              <p className="stock mb-0 text-dark py-3 fw-bold">Total</p>
            </td>
            <td className="">
              <div className="py-3 border-bottom border-top fw-bold">
                <p className="stock mb-0 text-dark">Rs {totalprice}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Productinfo;
