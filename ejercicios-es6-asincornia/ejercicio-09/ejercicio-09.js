const imagenRandom = document.querySelector(".random-image");

document.addEventListener("DOMContentLoaded", () => {
    const randomPokemon = Math.floor((Math.random() * 151) + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((result) => result.json())
        .then((result) => {
            imagenRandom.setAttribute("src", result.sprites.other["official-artwork"].front_default);
        });
    });