import React from "react";
import { PulseLoader } from "react-spinners";
import Button from "../../common/button/Button";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ hasLoading, allDataLoaded, loadMore }) => {
  if (hasLoading) {
    return (
      <div className="text-center mt-3">
        <PulseLoader color="#00AFEF" />
      </div>
    );
  } else if (!hasLoading && !allDataLoaded) {
    return (
      <div className="text-center">
        <hr />
        <Button
          onClick={loadMore}
          className="btn hover-pagination"
          label="Load More"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default LoadMoreButton;
