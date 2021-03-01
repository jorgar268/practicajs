window.alert("Bienvenido a mi página");
document.getElementById("secondaryPage").style.display = "none";
//var x = document.getElementById("demo");

// function showMore() {
//   //document.getElementById("btn").classList.add('active');
//   x.innerHTML =
//     "¿Estás prepado?¡Adelante pulsa sobre el menú de navegación del principio de la página.";
// }

function showMore() {
  var x = document.getElementById("demo");
  x.classList.toggle("show");
}
