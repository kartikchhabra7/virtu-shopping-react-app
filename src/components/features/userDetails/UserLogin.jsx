import React from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import Button from "../../common/button/Button";
import "./userDetails.css";
const UserLogin = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuthentication();

  function isNameCapitialize() {
    return `Hello , ${user.nickname
      .charAt(0)
      .toLocaleUpperCase()}${user.nickname.slice(1)}`;
  }
  
  return (
    <>
      {isAuthenticated ? (
        <Button
          className="btn user-btn"
          // onClick={() => loginWithRedirect()}
          label={isNameCapitialize()}
        />
      ) : (
        <Button
          className="btn user-btn"
          onClick={() => loginWithRedirect()}
          label="Log In"
        />
      )}
    </>
  );
};

export default UserLogin;
