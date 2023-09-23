import { toast } from "react-toastify";

export const showErrorNotification = (message) => {
  toast.error(message);
};

export const showSuccessNotification = (message) => {
  toast.success(message, {
    // style: {
    //   color: "#00AFEF",
    //   background:"aliceblue"
    // },
    // progressStyle:{
    //   background:"#00AFEF"
    // },
    // progressClassName:"testing"
  });
};
