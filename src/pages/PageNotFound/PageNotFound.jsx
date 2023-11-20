import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
import Image from "../../components/common/image/Images";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="pageNotFound">
      <Image
        src="https://raw.githubusercontent.com/m-mourouh/404-Error-Page-Page-Not-Found/3d6da8f9171ab9ea25744f5019332d0bcc0accc4/Page%20Not%20found/404.svg"
        alt="page not found"
      />
      <div className="wrapper">
        <h1>Page Not Found</h1>
        <p className="message">
          Oops! The page you're looking for is missing..
        </p>
        <button className="btn" onClick={() => navigate("/")}>
          Go To Home
        </button>
        <p className="copyRights"></p>
      </div>
    </section>
  );
};

export default PageNotFound;
