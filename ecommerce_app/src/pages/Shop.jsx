import React, { useEffect } from "react";

import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import Fruitshop from "../components/shop/Fruitshop";

function Shop() {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SearchModal />
      <Header title="Shop" />
      <Fruitshop />
    </>
  );
}

export default Shop;
