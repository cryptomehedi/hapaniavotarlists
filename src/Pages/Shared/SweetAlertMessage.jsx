import Swal from "sweetalert2";

const SweetAlertMessage = (SAM) => {
  // console.log(SAM);
  const { title,icon,text, lastTitle, run, show } = SAM
  if(run){
    Swal.fire({
      title: title || "Adding a Votar",
      html: "Please Wait....",
      timer: 3000,
      didOpen: () => {
        Swal.showLoading();
      },
    })
  }
  if(show){
    Swal.fire({
      title: title || "Adding a Votar",
      html: "Please Wait....",
      timer: 1000,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          position: "center",
          icon: icon || "success",
          title: lastTitle || "Added Successfully",
          text: text,
          showConfirmButton: false,
          timer: 1500,
        });
      } 
    });
  }
};
export default SweetAlertMessage;