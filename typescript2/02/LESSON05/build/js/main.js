"use strict";
let a = "Oi";
let b = a;
b = "string";
b = 123;
let c = a;
//
let d = "World";
let e = "string";
let f = "string";
f = 1234;
let g = 1234;
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let varA = addOrConcat(10, 10, "concate");
console.log(varA);
let varB = addOrConcat(10, 10, "add");
console.log(varB);
const sumOrBoolean = (a, b, c) => {
    if (c === true) {
        return a + b;
    }
    return c;
};
let varC = sumOrBoolean(20, 20, true);
console.log(varC);
let varD = sumOrBoolean(10, 10, false);
console.log(varD);
const sumOrBoolComp = (a, b) => {
    if (a + b > 10) {
        return true;
    }
    else {
        return a + b;
    }
};
let varE = sumOrBoolComp(10, 30);
console.log(varE);
let varF = sumOrBoolComp(2, 2);
console.log(varF);
