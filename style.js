function getPokemonData() {
  const random = Math.floor(Math.random() * 150 + 1);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
}

function generateCard(data) {
  let container = document.getElementById("container");
  var myString = appendtypes(data.types).join(" ");
  container.innerHTML = `
    <div class="pokemon">
    <img src="${data.sprites.back_default}" alt="">
    <div class="flex">
        <p><span>NAME :   ${data.name}</span></p>
        <p><span>TYPE :   ${myString}</span> </p>
        <p><span>ATTACK :   ${data.stats[1].base_stat}</span> </p>
        <p><span>DEFENCE :   ${data.stats[2].base_stat}</span></p>
        <p><span>SPEED :   ${data.stats[5].base_stat}</span> </p>
    </div>
</div>`;
}


function appendtypes(types) {
  let arr = [];
  for (i = 0; i < types.length; i++) {
    arr.push(types[i].type.name);
  }
  return arr;
}
