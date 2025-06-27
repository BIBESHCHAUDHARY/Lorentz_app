import React, { useEffect, useState } from "react";
import { useMyOrderQuery } from "../redux/Api/OrderApi";
import { constant } from "../components/common/constant";
import { Link } from "react-router";
import Empty from "../img/emptyCart.jpg";

function Order() {
  const [select, setSelect] = useState("Default");
  const { data, refetch } = useMyOrderQuery();

  const filterOrder = data?.data?.filter((item) => {
    if (select == "Default") {
      return item;
    } else {
      return item?.status?.includes(select);
    }
  });

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
    refetch();
  }, []);

  if (data?.data?.length == 0) {
    return (
      <div className="container-fluid">
        <div className="container py-5 d-flex flex-column align-items-center">
          <img
            src={Empty}
            alt="randomimage"
            className="w-25 h-25 object-fit-cover"
          />
          <p className="stock text-primary fw-bold text-center">
            Your order is empty, Please Buy Something.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className=" d-flex justify-content-between">
        <h5>My Order Lists</h5>
        <div className="d-flex gap-2 align-items-center">
          <p className="stock text-primary">Sorting:</p>
          <select onChange={(e) => setSelect(e.target.value)} className="stock">
            <option value="Default">Default</option>
            <option value="Pending">Pending</option>
            <option value="Confirm">Confirm</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancel">Cancel</option>
          </select>
        </div>
      </div>
      <div className="table-responsive border card mt-2">
        <table className="table  table-bordered   ">
          <thead>
            <tr className="stock text-primary">
              <th scope="col" className="">
                SN
              </th>
              <th scope="col" className="date">
                Date
              </th>
              <th scope="col" classsName="imageorder">
                Image
              </th>
              <th scope="col" className="titleorder">
                Title
              </th>
              <th scope="col" className="total">
                Price(Rs)
              </th>
              <th scope="col">Quantity</th>
              <th scope="col" className="total">
                Total(Rs)
              </th>
              <th scope="col" className="total">
                Status
              </th>
              <th scope="col" className="paymentmethodorder">
                Payment Method
              </th>
              <th scope="col" className="paymentmethodorder">
                Payment Image
              </th>
              <th scope="col" className="total">
                Transaction Id
              </th>
              <th scope="col" className="province">
                Province
              </th>
              <th scope="col" className="paymentmethodorder">
                District
              </th>
              <th scope="col" className="paymentmethodorder">
                Municipality
              </th>
              <th scope="col"> Address</th>
            </tr>
          </thead>
          <tbody>
            {filterOrder?.map((item, index) => (
              <tr key={index}>
                <th className="stock">{index + 1}</th>
                <th className="stock">
                  {item?.createdAt.toString().split("T")[0]}
                </th>
                <th scope="row">
                  <div className=" ">
                    {item?.products?.map((item, index) => (
                      <Link
                        to={`${constant.IMAGEURL}/${item?.product?.mainimage}`}
                        className="d-flex align-items-center "
                      >
                        <img
                          key={index}
                          src={`${constant?.IMAGEURL}/${item?.product?.mainimage}`}
                          className="orderimage"
                          alt="randomImage"
                        />{" "}
                        <br />
                      </Link>
                    ))}
                  </div>
                </th>
                <td className="stock">
                  {item?.products?.map((item, index) => (
                    <>
                      <td key={index}>{item?.product?.title}</td> <br />
                    </>
                  ))}
                </td>
                <td className="stock">
                  {item?.products?.map((item, index) => (
                    <>
                      <td key={index}>{item?.product?.priceafterdiscount}</td>
                      <br />
                    </>
                  ))}
                </td>
                <td className="stock">
                  {item?.products?.map((item, index) => (
                    <>
                      <td key={index}>{item?.quantity}</td> <br />
                    </>
                  ))}
                </td>
                <td className="stock">
                  {item?.products?.map((item, index) => (
                    <>
                      <td key={index}>
                        {item?.quantity * item?.product?.priceafterdiscount}
                      </td>
                      <br />
                    </>
                  ))}
                </td>
                <td className="stock">{item?.status}</td>
                <td className="stock">{item?.payment_method}</td>
                {item?.onlinepayimage ? (
                  <th scope="row">
                    <Link
                      to={`${constant.IMAGEURL}/${item.onlinepayimage}`}
                      className="d-flex align-items-center "
                    >
                      <img
                        key={index}
                        src={`${constant?.IMAGEURL}/${item?.onlinepayimage}`}
                        className="orderimage"
                        alt="randomImage"
                      />
                    </Link>
                  </th>
                ) : (
                  <h1></h1>
                )}
                <td className="stock">{item?.transactionid}</td>
                <td className="stock">{item?.billingAddress?.province}</td>
                <td className="stock">{item?.billingAddress?.district}</td>
                <td className="stock">{item?.billingAddress?.municipality}</td>
                <td className="stock">{item?.billingAddress?.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order;
