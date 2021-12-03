'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
        const fetchedData = await fetch(url);
        const jsonData = await fetchedData.json();
        return jsonData;
  }
  catch(error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(url) {
  const jsonData = await fetchData(url);
  const selectElement = document.querySelector('select');
  for (const pokemon of jsonData.results) {
    const optionElement = document.createElement('option');
    optionElement.value = pokemon.url;
    optionElement.textContent = pokemon.name;
    selectElement.appendChild(optionElement);
  }
}

async function fetchImage() {
  const selectedPokemon = document.querySelector('#pokemonList');
  const pokemonURL = selectedPokemon.options[selectedPokemon.selectedIndex].value;
  const imgElement = document.querySelector('img');
  try {
        const newJsonData = await fetchData(pokemonURL);
        imgElement.src = newJsonData.sprites.front_default;
        imgElement.alt = newJsonData.name;
  }
  catch(error) {
    console.log(error);
  }
}

function main() {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  buttonElement.textContent = 'Get Pokemon!';
  document.body.appendChild(buttonElement);
  buttonElement.addEventListener('click', () => {
   fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon/?limit=151');
   buttonElement.disabled = true;
  });
  const selectElement = document.createElement('select');
  selectElement.id = 'pokemonList';
  document.body.appendChild(selectElement);
  selectElement.addEventListener('change', fetchImage);
  const imgElement = document.createElement('img');
  document.body.appendChild(imgElement);
}

window.addEventListener('load', main);