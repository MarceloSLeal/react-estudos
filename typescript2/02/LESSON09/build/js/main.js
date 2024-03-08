"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
let varInt1 = { studentId: "ABC", tittle: "Titulo", grade: 1, verified: true };
let varInt2 = { studentId: "DEF", verified: false };
const var1 = updateAssignment(varInt1, varInt2);
console.log(var1);
const listProps = (listProps, listUpdate) => {
    return Object.assign(Object.assign({}, listProps), listUpdate);
};
let varProp1 = { sand: "Arrakis", people: 100, monsters: 1, weapons: "sword" };
let varList1 = listProps(varProp1, { monsters: 10 });
console.log(varList1);
const funcRequired = (assign) => {
    return Object.assign({}, assign);
};
const funcNotRequired = (assign) => {
    return Object.assign({}, assign);
};
console.log(funcRequired({ prop1: "A", prop2: "B", prop3: 1, prop4: true }));
console.log(funcNotRequired({ prop1: "B", prop2: "C", prop3: 10 }));
const carList = {
    BMW: { name: "IDN", model: "IDN", brand: "BMW", km: 1000 },
    PORCHE: { name: "Kayene", model: "IDN", brand: "Porche", km: 500 },
    FERRARI: { name: "F1", model: "IDN", brand: "Ferrari", km: 2000 },
};
const finalGrades = {
    Marcelo: "A",
    Rose: "B",
    "Leo o gato": "D",
};
const t1 = {
    tittle: "Study Harder",
    task: "TypeScript",
};
const t2 = {
    tittle: "Try not to sleep",
    status: true,
};
const funcNotas1 = (notas) => {
    console.log(notas);
};
funcNotas1("A");
const funcNotas2 = (notas) => {
    console.log(notas);
};
funcNotas2("C");
const funcNotas3 = (notas) => {
    console.log(notas);
};
funcNotas3("C");
const funcNotas4 = (notas) => {
    console.log(notas);
};
funcNotas4("D");
const funcNonNullable1 = (t) => {
    console.log(t);
};
funcNonNullable1("Zumbi");
const funcNonNullable2 = (t) => {
    console.log(t);
};
funcNonNullable2("Leo o Gato");
//////////////
// ReturnType
const f1 = (a, b) => {
    return a % b;
};
const returnType = f1(10, 20);
console.log(returnType);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
