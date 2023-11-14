import { useRef, useEffect } from "react";
import Swal from "sweetalert2";
import useAuthentication from "../../hooks/useAuthentication";

const useModalStorage = () => {
  const { isAuthenticated } = useAuthentication();
  const countModal = useRef(
    parseInt(localStorage.getItem("modalShownCount")) || 0
  );

  useEffect(() => {
    const showPopup = () => {
      Swal.fire({
        title: "Hello Welcome to My Shopping App !",
        text: "For better experience we suggest you Please Login Firsty",
        icon: "success",
      });
      countModal.current = 1;
      localStorage.setItem("modalShownCount", 1);
      localStorage.setItem("lastShownTime", new Date().getTime());
    };

    setTimeout(() => {
      if (!isAuthenticated && countModal.current < 1) {
        const lastShownTime =
          parseInt(localStorage.getItem("lastShownTime")) || 0;
        const currentTime = new Date().getTime();
        const oneMinuteInMillis = 60 * 1000;

        if (currentTime - lastShownTime >= oneMinuteInMillis) {
          showPopup();
        }
      }
    }, 10 * 1000); // set timer logic for show popup

    const clearLocalStorageTimer = setTimeout(() => {
      localStorage.removeItem("modalShownCount");
      localStorage.removeItem("lastShownTime");
    }, 60 * 1000);
    return () => clearTimeout(clearLocalStorageTimer);
  }, [isAuthenticated]);
};

export default useModalStorage;
