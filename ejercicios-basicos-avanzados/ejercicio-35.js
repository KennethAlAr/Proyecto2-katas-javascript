// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Deadpool', power: 'regeneration'},
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    let numberMutants = 0;
    let mutantsWithPower = [];
    for (const mutant of mutants) {
        if (power == mutant.power) {
            numberMutants += 1;
            mutantsWithPower.push(mutant.name);
        };
    };
    if (numberMutants == 0) {
        return "No hay mutantes en la lista con ese poder.";
    } else if (numberMutants == 1) {
        return `${mutantsWithPower[0]} tiene el poder de "${power}".`;
    } else {
        string = `Los siguientes mutantes tienen el poder de "${power}":`;
        for (const mutantWithPower of mutantsWithPower) {
            string += " " + mutantWithPower; 
        };
        return string;
    };
};

console.log(findMutantByPower(mutants, "fly"));
console.log(findMutantByPower(mutants, "steel skin"));
console.log(findMutantByPower(mutants, "regeneration"));