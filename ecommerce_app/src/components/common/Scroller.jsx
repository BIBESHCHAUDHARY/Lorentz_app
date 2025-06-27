import React, { useEffect } from "react";

function Scroller() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
}

export default Scroller;
