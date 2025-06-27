import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingButton() {
  return (
    <ClipLoader
      color={"white"}
      loading={true}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingButton;
