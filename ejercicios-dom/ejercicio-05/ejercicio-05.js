const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign in Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const albumsObjects = [
    {
        name: "De Mysteriis Dom Sathanas",
        image: "https://m.media-amazon.com/images/I/51x9KCJl8TL._UF1000,1000_QL80_.jpg",
        url: "https://www.amazon.es/Mysteriis-Dom-Sathanas-Vinilo/dp/B000ERU6EE"
    },
    {
        name: "Reign in Blood",
        image: "https://m.media-amazon.com/images/I/81wW0qxswYL._UF1000,1000_QL80_.jpg",
        url: "https://www.amazon.es/Reign-Blood-Slayer/dp/B00BV0W8RQ"
    },
    {
        name: "Ride the Lightning",
        image: "https://m.media-amazon.com/images/I/716FcW7qgSL._UF1000,1000_QL80_.jpg",
        url: "https://www.amazon.es/Metallica-Ride-Lightning-Vinilo/dp/B000025ZVK"
    },
    {
        name: "Painkiller",
        image: "https://m.media-amazon.com/images/I/81XNEZ7MtJL._UF1000,1000_QL80_.jpg",
        url: "https://www.amazon.es/Painkiller-Judas-Priest/dp/B000026EF8"
    },
    {
        name: "Iron Fist",
        image: "https://m.media-amazon.com/images/I/91BULydS6yL._UF1000,1000_QL80_.jpg",
        url: "https://www.amazon.es/Iron-Fist-Mot%C3%B6rhead/dp/B001G5SDRK"
    }
];

let header = document.createElement("header");
document.body.appendChild(header);

let main = document.createElement("main");
document.body.appendChild(main);

let footer = document.createElement("footer");
document.body.appendChild(footer);

let headerH1 = document.createElement("h1");
headerH1.innerHTML = "Bests Albums"
header.appendChild(headerH1)

let ul = document.createElement("ul");
for (const album of albumsObjects) {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let botonVenta = document.createElement("button");
    img.setAttribute("src", album.image);
    li.appendChild(img);
    h4.innerHTML = album.name;
    li.appendChild(h4);
    botonVenta.innerHTML = "Comprar";
    botonVenta.addEventListener("click", () => {
        window.open(album.url)
    })
    li.appendChild(botonVenta);
    ul.appendChild(li);
};
main.appendChild(ul);

let footerH4 = document.createElement("h4");
footerH4.innerHTML = "Copyright 2025 - Kenneth Alonso";
footer.appendChild(footerH4);