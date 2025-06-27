import React, { useCallback, useEffect, useMemo } from "react";
import Carttotal from "./cartTotal";
import { useUserInfoQuery } from "../../redux/Api/AuthApi";
import { constant } from "../common/constant";
import {
  useDecreaseCartMutation,
  useIncreaseCartMutation,
  useRemoveCartMutation,
} from "../../redux/Api/CartApi";
import Empty from "../../img/emptyCart.jpg";

function Cartinfo() {
  const { data, refetch } = useUserInfoQuery();
  const cart = data?.data.cart;
  const [INCREASE] = useIncreaseCartMutation();
  const [DECREASE] = useDecreaseCartMutation();
  const [REMOVECART] = useRemoveCartMutation();

  const increase = useCallback(
    async (item) => {
      await INCREASE({
        product: item.product._id,
      });
      refetch();
    },
    [INCREASE, refetch]
  );

  const decrease = useCallback(
    async (item) => {
      if (item.quantity > 1) {
        await DECREASE({
          product: item.product._id,
        });
        refetch();
      } else {
        if (confirm("Do you want to remove this product?") == true) {
          await REMOVECART({
            product: item.product._id,
          });
          refetch();
        }
      }
    },
    [DECREASE, REMOVECART, refetch]
  );
  const removeCart = useCallback(
    async (item) => {
      await REMOVECART({
        product: item.product._id,
      });
      refetch();
    },
    [REMOVECART, refetch]
  );

  const totalPrice = useMemo(() => {
    return cart?.reduce(
      (acc, item) => acc + item.quantity * item.product.priceafterdiscount,
      0
    );
  }, [cart]);

  useEffect(() => {
    refetch();
  }, []);
  if (cart?.length == 0) {
    return (
      <div className="container-fluid">
        <div className="container py-5 d-flex flex-column align-items-center">
          <img
            src={Empty}
            alt="randomImage"
            className="w-25 h-25 object-fit-cover"
          />
          <p className="stock text-primary fw-bold text-center">
            Your Cart is Empty!
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid ">
      <div className="container py-5">
        <div className="table-responsive border rounded ">
          <table className="table ">
            <thead>
              <tr className="stock text-primary">
                <th scope="col  ">SN</th>
                <th scope="col ">Products</th>
                <th scope="col ">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="stock text-primary">
                  <td>
                    <p className="mb-0 mt-4">{index + 1}</p>
                  </td>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${constant?.IMAGEURL}/${item?.product?.mainimage}`}
                        className="img-fluid me-5 rounded-circle cartinfo"
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">{item?.product?.title}</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">
                      Rs {item?.product?.priceafterdiscount}
                    </p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
                      style={{ width: "100px" }}
                    >
                      <div className="input-group-btn">
                        <button
                          onClick={() => decrease(item)}
                          className="btn btn-sm btn-minus rounded-circle bg-secondary border"
                        >
                          <i className="fa fa-minus text-white"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control bg-transparent form-control-sm text-center text-primary border-0"
                        value={item.quantity}
                        disabled
                      />

                      <div className="input-group-btn">
                        <button
                          onClick={() => increase(item)}
                          className="btn btn-sm btn-plus rounded-circle bg-secondary border"
                        >
                          <i className="fa fa-plus text-white"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">
                      {item?.quantity * item.product.priceafterdiscount}
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => removeCart(item)}
                      className="   bg-transparent border-0 mt-4"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Carttotal data={totalPrice} />
      </div>
    </div>
  );
}

export default Cartinfo;
