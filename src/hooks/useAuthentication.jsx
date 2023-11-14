import { useAuth0 } from "@auth0/auth0-react";

const useAuthentication = () => {
  return useAuth0();
};

export default useAuthentication;
