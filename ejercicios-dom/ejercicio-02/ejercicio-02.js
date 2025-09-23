// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let divConParrafo = document.createElement("div");
let nuevoParrafo = document.createElement("p");
divConParrafo.appendChild(nuevoParrafo);
document.body.appendChild(divConParrafo);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

let divCon6Parrafos = document.createElement("div");
for (let i = 0; i < 6; i++) {
    divCon6Parrafos.appendChild(document.createElement("p"));
};
document.body.appendChild(divCon6Parrafos);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const texto = "Soy dinámico!"
let parrafoConTexto = document.createElement("p");
parrafoConTexto.innerHTML = texto;
document.body.appendChild(parrafoConTexto);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let IAmInGreatPainPleaseHelpMe = "Wubba Lubba dub dub"
const h2ConTexto = document.querySelector(".fn-insert-here");
h2ConTexto.innerHTML = IAmInGreatPainPleaseHelpMe;

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let nuevoUl = document.createElement("ul");
for (const app of apps) {
    let li = document.createElement("li");
    li.innerHTML = app;
    nuevoUl.appendChild(li);
};
document.body.appendChild(nuevoUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeMe = document.querySelectorAll(".fn-remove-me");
for (const element of removeMe) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let nuevoParrafoMedio = document.createElement("p");
nuevoParrafoMedio.innerHTML = "Voy en medio!";
let primerDiv = document.querySelector("div");
primerDiv.after(nuevoParrafoMedio);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

let divContenedor = document.querySelectorAll(".fn-insert-here");
for (const contenedor of divContenedor) {
    let pInterior = document.createElement("p");
    pInterior.innerHTML = "Voy dentro!";
    contenedor.appendChild(pInterior);
};