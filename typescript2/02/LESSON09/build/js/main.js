"use strict";
// Utility Types
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
