import React, { useEffect, useState } from "react";
import UserLogin from "./UserLogin";

import LoaderContainer from "../../common/loaderbar/LoaderContainer";
import useLoading from "../../../hooks/useLoading";

const UserNotAuthenticated = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { hasLoad } = useLoading();

  useEffect(() => {
    setShowLogin(true);
  }, []);
  if (hasLoad) {
    return <LoaderContainer />;
  }
  return (
    <>
      <section
        className="d-flex justify-content-center bg-body-teritary align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="card w-50">
          <div className="card-body">
            <h3 className="card-title">Access Denied</h3>
            <h6 className="card-text">
              We're sorry, but you don't have permission to access this page. To
              view the content, please log in. If you don't have an account, you
              can sign up for one.
            </h6>

            {showLogin && <UserLogin />}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserNotAuthenticated;
