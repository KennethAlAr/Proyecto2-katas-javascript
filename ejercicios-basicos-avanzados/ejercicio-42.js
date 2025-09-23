// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
    let first = array[index1];
    let second = array[index2];
    array[index1] = second;
    array[index2] = first;
    return array;
};

console.log(swap(fantasticFour, 1, 3));
console.log(swap(fantasticFour, 0, 2));