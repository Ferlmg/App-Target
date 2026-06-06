const imagenes = [
    "img/cole1.webp",
    "img/cole2.webp",
    "img/cole3.webp",
    "img/cole4.webp"
];

let actual = 0;

const galeria = document.getElementById("galeria");

galeria.addEventListener("click", () => {
    actual++;
    
    if (actual >= imagenes.length) {
        actual = 0;
    }

    galeria.src = imagenes[actual];
});
