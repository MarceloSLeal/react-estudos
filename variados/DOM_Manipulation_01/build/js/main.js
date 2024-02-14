"use strict";
const label = document.getElementById("label");
let contador = 0;
label.addEventListener('click', (e) => {
    console.log("Clicou");
    contador++;
    label.innerText = `Numero clique ${contador}`;
});
