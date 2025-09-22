// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
// Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

const metal = [];
const rock = [];
const pop = [];
const country = [];
const grunge = [];

for (const track of tracks) {
    if (track.genre == "Metal"){
        metal.push(track);
    } else if (track.genre == "Rock"){
        rock.push(track);
    } else if (track.genre == "Pop"){
        pop.push(track);
    } else if (track.genre == "Country"){
        country.push(track);
    } else {
        grunge.push(track);
    };
};

const tracksByGenre = {
    "Metal" : metal,
    "Rock" : rock,
    "Pop" : pop,
    "Country" : country,
    "Grunge" : grunge
}

console.log(tracksByGenre);