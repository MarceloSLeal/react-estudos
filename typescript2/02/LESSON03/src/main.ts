let stringArr = ["1", "2", "3"];
let teclas = ["A", "B", "C", 7];
let dadosMix = ["ABC", 123, true]

stringArr[0] = "0";
stringArr.push("4");

teclas[0] = 1;
teclas.unshift("ç");

let test = [];
let bands: string[] = [];
bands.push("Ramones");

// Tuple
let myTuple: [string, number, boolean] = ["Marcelo", 43, true];
// let dadosMix = ["Rose", 38, true];

dadosMix = myTuple;
myTuple[1] = 20;


// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Name",
  prop2: 123,
  prop3: true
}

exampleObj.prop1 = "Novo nome"
exampleObj.prop2 = 456;
exampleObj.prop3 = false;

enum LangUses {
  FrontEnd,
  BackEnd,
}

console.log(LangUses[0]);

type Lang = {
  name: string,
  popular: boolean,
  use: LangUses,
}

const varLang: Lang = {
  name: "Java",
  popular: true,
  use: LangUses.BackEnd,
}

const func1 = (usr: typeof exampleObj, lang: Lang) => {
  console.log("nome programador: " + usr.prop1);
  console.log("idade: " + usr.prop2);
  console.log("ativo: " + usr.prop3);
  console.log("linguagem " + lang.name);
  console.log("popularidade " + lang.popular);
  console.log("uso " + LangUses[lang.use]);
}

func1(exampleObj, varLang);


//////

type Produto = "ALIMENTO" | "LIMPEZA" | "JARDINAGEM" | "FERRAMENTA" | "DECORACAO" | "ELETRONICO";

let produ1: Produto = "ELETRONICO";

const item = (prod: Produto, id: number, sku?: number) => {
  console.log("Produto " + prod);
  console.log(id);
  if (sku != null) {
    console.log(sku);
  } else {
    console.log(0);
  }
}


item(produ1, 1, 1);

/////

interface Teste {
  item1: string,
  item2?: number,
  item3: boolean
}

let teste1: Teste = {
  item1: "01",
  item2: 1,
  item3: true,
}

const constTeste = (teste: Teste) => {
  let a: string = "";
  a += `Retorno ${teste.item1} do item1 `;
  if (teste.item2 != undefined) {
    a += `Retorno ${teste.item2} do item2`
  }
  return a;
}

console.log(constTeste(teste1));
