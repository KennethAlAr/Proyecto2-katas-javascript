// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  if(numberOne > numberTwo) {
    console.log(`${numberOne} es mayor.`);
  } else if(numberTwo > numberOne) {
    console.log(`${numberTwo} es mayor.`)
  } else {
    console.log("Los números son iguales.")
  }
}

greaterNumber(1,2);
greaterNumber(4,3);
greaterNumber(5,5);