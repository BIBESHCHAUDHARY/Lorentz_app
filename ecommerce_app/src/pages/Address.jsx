import React, { useEffect } from "react";
import SearchModal from "../components/SearchModal";
import Header from "../components/Header";
import AddressForm from "../components/address/Addressform";

function Address() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SearchModal />
      <Header title="Address" />
      <AddressForm />
    </>
  );
}

export default Address;
