import React from "react";

function Showmessage({ status, message }) {
  return (
    <div
      className="showmessage w-100 mb-3 d-flex gap-2 py-2 px-2 align-items-center rounded "
      style={{
        backgroundColor: status == "success" ? "#4CAF50" : "rgb(222, 45, 45)",
      }}
    >
      {status == "success" ? (
        <i
          className="fas fa-check-circle"
          style={{
            color: "white",
          }}
        ></i>
      ) : (
        <i
          className="fas fa-times-circle"
          style={{
            color: "white",
          }}
        ></i>
      )}
      <p className="text-white ">{message}</p>
    </div>
  );
}

export default Showmessage;
