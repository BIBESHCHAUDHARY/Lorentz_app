import React, { useEffect, useState } from "react";

function ScrollUp() {
  const [show, setShow] = useState(false);
  const handler = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const topScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={topScroll} className={show ? "showarrow" : "hidearrow"}>
      <i
        className="fas fa-chevron-up fa-sm "
        style={{
          color: "#fff",
        }}
      ></i>
    </div>
  );
}

export default ScrollUp;
