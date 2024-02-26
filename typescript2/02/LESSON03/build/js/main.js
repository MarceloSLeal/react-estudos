"use strict";
let stringArr = ["1", "2", "3"];
let teclas = ["A", "B", "C", 7];
let dadosMix = ["ABC", 123, true];
stringArr[0] = "0";
stringArr.push("4");
teclas[0] = 1;
teclas.unshift("ç");
let test = [];
let bands = [];
bands.push("Ramones");
// Tuple
let myTuple = ["Marcelo", 43, true];
// let dadosMix = ["Rose", 38, true];
dadosMix = myTuple;
myTuple[1] = 20;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Name",
    prop2: 123,
    prop3: true
};
exampleObj.prop1 = "Novo nome";
exampleObj.prop2 = 456;
exampleObj.prop3 = false;
var LangUses;
(function (LangUses) {
    LangUses[LangUses["FrontEnd"] = 0] = "FrontEnd";
    LangUses[LangUses["BackEnd"] = 1] = "BackEnd";
})(LangUses || (LangUses = {}));
console.log(LangUses[0]);
const varLang = {
    name: "Java",
    popular: true,
    use: LangUses.BackEnd,
};
const func1 = (usr, lang) => {
    console.log("nome programador: " + usr.prop1);
    console.log("idade: " + usr.prop2);
    console.log("ativo: " + usr.prop3);
    console.log("linguagem " + lang.name);
    console.log("popularidade " + lang.popular);
    console.log("uso " + LangUses[lang.use]);
};
func1(exampleObj, varLang);
let produ1 = "ELETRONICO";
const item = (prod, id, sku) => {
    console.log("Produto " + prod);
    console.log(id);
    if (sku != null) {
        console.log(sku);
    }
    else {
        console.log(0);
    }
};
item(produ1, 1, 1);
let teste1 = {
    item1: "01",
    item2: 1,
    item3: true,
};
const constTeste = (teste) => {
    let a = "";
    a += `Retorno ${teste.item1} do item1 `;
    if (teste.item2 != undefined) {
        a += `Retorno ${teste.item2} do item2`;
    }
    return a;
};
console.log(constTeste(teste1));
