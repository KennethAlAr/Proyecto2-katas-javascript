const inputClick = document.querySelector(".click");
const inputFocus = document.querySelector(".focus");
const inputValue = document.querySelector(".value");

// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

let botonClick = document.createElement("button");
botonClick.setAttribute("id", "btnToClick");
botonClick.innerHTML = "Botón click";
inputClick.before(botonClick);

botonClick.addEventListener("click", (ev) => {
    console.log(ev);
});


// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

inputFocus.addEventListener("focus", () => {
    console.log(inputFocus.value);
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

inputValue.addEventListener("input", () => {
    console.log(inputValue.value);
});