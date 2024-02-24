console.log("Hi from TypeScript file oi");

let a = 10;

let b = 20;

let c = a + b;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(c);

const comparar = (a: number, b: number): string | undefined => {
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
  } else {
    return "Adicionar apenas números";
  }
};
console.log(comparar(30, 30));

const concatenar = (a: string, b: string): string => {
  return a + b;
};
console.log(concatenar("abc", "def"));

const arrayA = [];

for (let i = 1; i <= 100; i++) {
  arrayA.push(i);
}

let contador: number = 0;
let concatenador: string = "";
for (let i = 0; i < 10; i++) {
  concatenador = "";
  for (let j = 0; j < 10; j++) {
    if (contador < 9) {
      concatenador = concatenador + "0" + arrayA[contador] + " ";
      contador++;
    } else {
      concatenador = concatenador + arrayA[contador] + " ";
      contador++;
    }
  }
  console.log(concatenador);
}

interface Feira {
  readonly [index: string]: string;
  diaSemana: string;
  legumes1: string;
  legumes2: string;
  legumes3: string;
  folhas1: string;
  folhas2: string;
  folhas3: string;
  fruta1: string;
  fruta2: string;
  fruta3: string;
}

const segundaFeira: Feira = {
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
const tercaFeira: Feira = {
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

const diaDeFeira = (dia: Feira): string => {
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
  display: function() {
    console.log("Name: " + this.name);
  },
};

console.log(employee.display());

let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
})


let empregados = [
  {
    name: "Marcelo",
    salary: 1000
  },
  {
    name: "Rose",
    salary: 2000
  }
]

console.log(empregados)

let listaDeEmpregados: string[] = empregados.map(e => e.name)

console.log(listaDeEmpregados)

let listaDeSalarios: number[] = empregados.map(e => e.salary)

console.log(listaDeSalarios)

let numerosTeste: Array<number> = [10, 30, 13, 50, 1, 80, 70, 11, 42];
let numerosOrdenados: number[] = numerosTeste.sort();
console.log("Desordenados " + numerosTeste)
console.log("Ordenados " + numerosOrdenados)

let numerosFiltro: Array<number> = numerosTeste.filter(fil => fil.valueOf() > 10);
console.log(numerosFiltro);

const func = (parametro: string | number) => {
  console.log(parametro);
}
func("Variável String");
func(1234);
// func(true);/

enum Letras {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F"
}

let letraA: Letras;
letraA = Letras.A;
let letraB: Letras;
letraB = Letras.B;

const recebeLetras = (letras: Letras, avaliacao: string) => {
  console.log(letras.toString() + " " + avaliacao);
}

recebeLetras(letraA, "A melhor nota");
recebeLetras(letraB, "A segunda melhor nota")

const recebeLetras2 = (letras: Letras): string => {
  if (letras.valueOf() <= Letras.C) {
    return "Passou";
  } else {
    return "Não Passou";
  }
}

enum Letras2 {
  G,
  H,
  I,
  J,
  K,
  L
}

console.log(recebeLetras2(Letras.D));

console.log(Letras2.G);
console.log(Letras2.H);
console.log(Letras2.I);
console.log(Letras2.J);
console.log(Letras2.K);
console.log(Letras2.L);

const tupla = (par: [string, number]) => {
  console.log(par[0]);
  console.log(par[1]);
}
tupla(["Nome", 30]);

type empId = number;
let empIdExample1: empId = 10;
let empIdExample2: empId = 20;

type newEmploee = {
  name: string,
  address: {
    city: string,
    postalCode: string
  }
}

let emp1: newEmploee = {
  name: "Oi",
  address: {
  city: "Mauá",
  postalCode: "666"
  }
}

console.log(emp1);

type Input = string | number | boolean;

const tipo = (valor: Input): string => {
  if (typeof(valor) === "string") {
    return "String";
  } 
  if (typeof(valor) === "number") {
    return "Number";
  }
  if (typeof(valor) === "boolean") {
    return "Boolean";
  }
  return "Outro"
}

console.log(tipo("ABC"));
console.log(tipo(123));
console.log(tipo(true));

const handleRequest = (url: string, method: "GET" | "POST" | "PUT") => {
  console.log(method + " calling " + url);
}

handleRequest("www.google.com", "GET");

const compare = (s1: number, s2: number): number => {
  return s1 === s2 ? 0 : s1 > s2 ? 1 : -1
}

console.log(compare(10, 12));

///////////////

const funcao1 = (n1: number, n2: number, n3?: number): number => {
  return n1 + n2 + (n3 || 0)
}
console.log(funcao1(10, 20 ));

const displayLogs = (...logs: any[]) => {
  logs.forEach(log => {
    if (typeof log === "string") {
      console.log(log);
    } else {
      console.error(`Parametro ${log} não é uma string`);
    }
  })
}
displayLogs("Log1", "Log2", "Log3", 123, "Log4", true, "Log5", 456);

const contaString = (st: string | number) => {
  if ( typeof st === "string") {
    console.log(( st as string).length);
  } else {
    console.log("length only for string paramethers");
  }
}
contaString("1234")
contaString(1234);

const input1 = document.getElementById("input1") as HTMLInputElement;
console.log(input1?.value);
