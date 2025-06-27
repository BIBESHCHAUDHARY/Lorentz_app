import React, { useEffect } from "react";
import Product from "../components/shopdetail/Product";
import SearchModal from "../components/SearchModal";
import Header from "../components/Header";

function ShopDetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SearchModal />
      <Header title="Shop" />
      <Product />
    </>
  );
}

export default ShopDetail;
