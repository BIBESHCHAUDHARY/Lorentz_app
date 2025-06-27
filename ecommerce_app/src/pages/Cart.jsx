import React, { useEffect } from "react";
import Header from "../components/Header";
import Cartinfo from "../components/Cart/Cartinfo";
import SearchModal from "../components/SearchModal";

function Cart() {
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
      <Header title="Cart" />
      <Cartinfo />
    </>
  );
}

export default Cart;
