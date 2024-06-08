import Swal from "sweetalert2";

const SweetAlertMessage = () => {
    let timerInterval;
    Swal.fire({
      title: "Adding a Votar",
      html: "Please Wait....",
      timer: 3000,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
}
export default SweetAlertMessage