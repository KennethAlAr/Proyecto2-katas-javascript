// 3.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const nuevoUl = document.createElement("ul");
document.body.appendChild(nuevoUl);
for (const country of countries) {
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = country;
    nuevoUl.appendChild(nuevoLi);
};

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

let pAEliminar = document.querySelector(".fn-remove-me");
pAEliminar.remove();

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divExistente = document.querySelector('[data-function="printHere"]');
const ulEnDiv = document.createElement("ul");
divExistente.appendChild(ulEnDiv);
for (const car of cars) {
	let li = document.createElement("li");
	li.innerHTML = car;
	ulEnDiv.appendChild(li);
};

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesObjects = [
	{title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let nuevaSection = document.createElement("section");

for (const country of countriesObjects) {
	let nuevoDiv = document.createElement("div");
	let nuevoh4 = document.createElement("h4");
	nuevoh4.innerHTML = country.title;
	nuevoDiv.appendChild(nuevoh4);
	let nuevoImg = document.createElement("img");
	nuevoImg.setAttribute("src", country.imgUrl);
	nuevoDiv.appendChild(nuevoImg);
	nuevaSection.appendChild(nuevoDiv);
};

document.body.appendChild(nuevaSection);

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

let boton = document.createElement("button");
boton.innerHTML = "Eliminar último div";
document.body.appendChild(boton);
let divs = nuevaSection.querySelectorAll("div");
boton.addEventListener("click", () => {
	divs[divs.length -1].remove();
	divs = nuevaSection.querySelectorAll("div");
});

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

for (const div of divs) {
	let botonEliminar = document.createElement("button");
	botonEliminar.innerHTML = "Eliminar este div"
	botonEliminar.addEventListener("click", () => {
		div.remove();
		divs = nuevaSection.querySelectorAll("div");
	});
	div.appendChild(botonEliminar);
};