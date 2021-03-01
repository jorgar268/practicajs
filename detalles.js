// let fotoPerson = document.getElementById("fotoPerson");
// fotoPerson.addEventListener("click", (e) => {
//   console.log("FUNCIONA EVENTO detalles");
//   vermasdetalles();
// });
// function vermasdetalles(id) {
//   document.getElementById(`detallesPerson${id}`).style.display = "block";
// }

function vermasdetalles(id) {
  document.getElementById(`detallesPerson${id}`).classList.toggle("show");
}
