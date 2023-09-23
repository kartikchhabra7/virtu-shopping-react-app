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
