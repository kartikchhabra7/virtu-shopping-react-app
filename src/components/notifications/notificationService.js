import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const quantityConfirmation = (callback) => {
  Swal.fire({
    title: "Already added in Cart Page",
    text: "Are You Sure want to increase the quantity?",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, added it!",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      Swal.fire("Added!", "Quantity is increased .", "success");
    }
  });
};

export const deleteConfirmation = (callback) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      Swal.fire("Deleted!", "Your data has been deleted.", "success");
    }
  });
};

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
