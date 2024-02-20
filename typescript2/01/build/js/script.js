"use strict";
console.log("Hi from TypeScript file oi");
let a = 10;
let b = 20;
let c = a + b;
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(c);
const comparar = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        if (a > b) {
            return "A maior que B";
        }
        if (a === b) {
            return "A é igual a B";
        }
        if (b > a) {
            return "B maior que A";
        }
    }
    else {
        return "Adicionar apenas números";
    }
};
console.log(comparar(30, 30));
const concatenar = (a, b) => {
    return a + b;
};
console.log(concatenar("abc", "def"));
const arrayA = [];
for (let i = 1; i <= 100; i++) {
    arrayA.push(i);
}
let contador = 0;
let concatenador = "";
for (let i = 0; i < 10; i++) {
    concatenador = "";
    for (let j = 0; j < 10; j++) {
        if (contador < 9) {
            concatenador = concatenador + "0" + arrayA[contador] + " ";
            contador++;
        }
        else {
            concatenador = concatenador + arrayA[contador] + " ";
            contador++;
        }
    }
    console.log(concatenador);
}
const segundaFeira = {
    diaSemana: "Segunda-Feira",
    legumes1: "batata",
    legumes2: "cenoura",
    legumes3: "mandioca",
    folhas1: "couve",
    folhas2: "alface",
    folhas3: "almeirao",
    fruta1: "maçã",
    fruta2: "laranja",
    fruta3: "morango",
};
const tercaFeira = {
    diaSemana: "Terça-Feira",
    legumes1: "mandioquinha",
    legumes2: "abóbora",
    legumes3: "pepino",
    folhas1: "coentro",
    folhas2: "espinafre",
    folhas3: "hortelã",
    fruta1: "banana",
    fruta2: "limão",
    fruta3: "melancia",
};
const diaDeFeira = (dia) => {
    let itens = "";
    for (const itensFeira in dia) {
        itens += " " + dia[itensFeira];
    }
    return itens;
};
console.log(diaDeFeira(segundaFeira));
console.log(diaDeFeira(tercaFeira));
const employee = {
    name: "Marcelo",
    companyName: "Empresa do Marcelo",
    address: {
        city: "Mauá",
        state: "SP",
        street: "Rua do Marcelo",
        country: "Brasil",
    },
    display: function () {
        console.log("Name: " + this.name);
    },
};
console.log(employee.display());
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updateNumbers = numbers.filter((n) => n > 3);
let numberIndex = numbers.findIndex((n) => n === 5);
let numberMap = numbers.map((n) => n * 2);
console.log(updateNumbers);
console.log(numberIndex);
console.log(numberMap);
for (const num in numbers) {
    console.log(num);
}
numbers.forEach((n) => {
    console.log(n);
});
let empregados = [
    {
        name: "Marcelo",
        salary: 1000
    },
    {
        name: "Rose",
        salary: 2000
    }
];
console.log(empregados);
let listaDeEmpregados = empregados.map(e => e.name);
console.log(listaDeEmpregados);
let listaDeSalarios = empregados.map(e => e.salary);
console.log(listaDeSalarios);
let numerosTeste = [10, 30, 13, 50, 1, 80, 70, 11, 42];
let numerosOrdenados = numerosTeste.sort();
console.log("Desordenados " + numerosTeste);
console.log("Ordenados " + numerosOrdenados);
//# sourceMappingURL=script.js.map