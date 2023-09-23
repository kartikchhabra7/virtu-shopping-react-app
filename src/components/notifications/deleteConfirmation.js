import Swal from "sweetalert2";

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
