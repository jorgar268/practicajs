const navigateBtn = document.getElementById("toList");
navigateBtn.addEventListener("click", (e) => {
  console.log("FUNCIONA EVENTO");
  // e.preventDefault(); los botones no
  navigateSecondaryPage();
  getAPIData();
});

function navigateSecondaryPage() {
  // cambiar
  document.getElementById("landing").style.display = "none";
  document.getElementById("secondaryPage").style.display = "block";
}

function getAPIData() {
  fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17"
  )
    .then((res) => {
      console.log(res);
      return res.json(); //es un objeto json
    })
    .then((data) => {
      console.log(data);
      let output = "<h2></h2>";
      data.forEach(function (character) {
        console.log(character);
        output += `
          <div class="listaPersonajes">
          <img  id="fotoPerson${character.id}" class="imgPersonajes"
          src= "${character.image}" alt="${character.name}" style="width:100%" onclick="vermasdetalles(${character.id})">
          <div class="container">
          <h3>${character.name}</h3>
          <div class="hide" id="detallesPerson${character.id}">
          <h3>Status: ${character.status}</h3>
          <h3>Specie: ${character.species}</h3>
          <h3>Gender: ${character.gender}</h3>
          <h3>Origin: ${character.origin.name}</h3>
          </div>
          </div>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

// -------------------------------------------------
//<div class="detalles" id="detallesPerson${character.id}" style="display:none">
