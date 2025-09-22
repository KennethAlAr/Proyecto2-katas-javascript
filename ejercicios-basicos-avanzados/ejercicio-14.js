// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
// Puedes usar este array para probar tu función:

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    const controlList = [];
    for (const element of list) {
        if (!controlList.includes(element)){
            let counter = 0;
            for (const string of list) {
                if (element == string) {
                    counter += 1
                }
            }
            console.log(element + ": " + counter);
            counter = 0;
            controlList.push(element);
        };
    };
};

repeatCounter(words);