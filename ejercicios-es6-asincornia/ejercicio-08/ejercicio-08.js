const selector = document.querySelector("#character-list")

fetch("https://thronesapi.com/api/v2/Characters")
    .then((result) => result.json())
    .then((result) => {
        for (const character of result) {
            const newOption = document.createElement("option");
            newOption.value = character["id"];
            newOption.innerHTML = character["fullName"];
            selector.appendChild(newOption);
        }
    })

const imagen = document.querySelector(".character-image");

selector.addEventListener("change", (ev) => {
    fetch("https://thronesapi.com/api/v2/Characters")
        .then((result) => result.json())
        .then((result) => {
            for (const character of result) {
                if(ev.target.value == character["id"]){
                    imagen.setAttribute("src", character.imageUrl)
                }
            }
        })
})

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://thronesapi.com/api/v2/Characters")
        .then((result) => result.json())
        .then((result) => {
            for (const character of result) {
                if(0 == character["id"]){
                    imagen.setAttribute("src", character.imageUrl)
                }
            }
        })
})