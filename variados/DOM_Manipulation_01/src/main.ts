const label = document.getElementById("label") as HTMLLabelElement;
let contador = 0;

label.addEventListener('click', (e: Event) => {
    console.log("Clicou")

    contador++;

    label.innerText = `Numero clique ${contador}`;
    
})

