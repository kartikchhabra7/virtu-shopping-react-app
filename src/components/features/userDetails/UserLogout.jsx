import React from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import Button from "../../common/button/Button";
import "./userDetails.css"
const UserLogout = () => {
  const { logout, isAuthenticated } = useAuthentication();
  
  return (
    <>
      {isAuthenticated && (
        <Button
          className="btn user-btn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          label="Log Out"
        />
      )}
    </>
  );
};

export default UserLogout;

// isAuthenticated part is optional we can directly write logout button
