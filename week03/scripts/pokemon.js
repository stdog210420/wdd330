const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemonList(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}
// function doStuff(data) {
//     results = document.querySelector(".results");
//     // Ensure we are working with the `results` array
//     const pokemonArray = data.results;

//     if (!pokemonArray || !Array.isArray(pokemonArray)) {
//         console.error("Expected an array but received:", pokemonArray);
//         return;
//     }
//     // Create a list of Pokémon names dynamically
//     const pokemonList = pokemonArray.map((pokemon) => `<li>${pokemon.name}</li>`)
//         .join("");


//     if (results) {
//         const pokemonList = pokemonArray
//             .map((pokemon) => `<li>${pokemon.name}</li>`)
//             .join("");
//         // Render the list to the webpage
//         results.innerHTML = `<ul>${pokemonList}</ul>`;
//         console.log("first: ", results.innerHTML);
//     } else {
//         console.error("Element with class '.result' not found.");
//     }

// }

function doStuff(data) {
    results = data;
    console.log('first: ', results);
    results.results.forEach((pokemon) => {
        const div = document.createElement('div');
        div.textContent = pokemon.name;
        document.querySelector('main').appendChild(div);
        // assumes you have a <main> element in your HTML document
    });
}
// Call the function to fetch the Pokémon list
getPokemonList(url);
console.log("second: ", results);