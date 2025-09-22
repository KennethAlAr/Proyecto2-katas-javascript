// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

const seventies = [];
const eighties = [];
const nineties = [];
const theAughts = [];
const twentyTens = [];

for (const movie of starWarsMovies) {
    if (movie.releaseYear < 1980) {
        seventies.push(movie);
    } else if (movie.releaseYear < 1990) {
        eighties.push(movie)
    } else if (movie.releaseYear < 2000) {
        nineties.push(movie)
    } else if (movie.releaseYear < 2010) {
        theAughts.push(movie)
    } else {
        twentyTens.push(movie)
    };
};

 const moviesByDecade = {
    "seventies" : seventies,
    "eighties" : eighties,
    "nineties" : nineties,
    "theAughts" : theAughts,
    "twentyTens" : twentyTens,
 };

 console.log(moviesByDecade);