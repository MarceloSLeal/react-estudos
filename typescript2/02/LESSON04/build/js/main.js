"use strict";
const funcao1 = (param1, param2) => {
    return param1 + param2;
};
const funcao2 = (message) => {
    console.log(message);
};
funcao2("Oi");
funcao2(123);
funcao2(true);
funcao2(funcao1(10, 100));
/////
const func1 = (a, b) => {
    return a + b;
};
const func2 = (a, b) => {
    return a - b;
};
const func3 = (a, b) => {
    return a * b;
};
const func4 = (a, b) => {
    return a / b;
};
console.log(func4(func3(10, 20), func2(50, func1(200, 10))));
const func5 = (c, d) => {
    return c * d;
};
const func6 = (c, d) => {
    return c.length + d.length;
};
console.log(func6("1234", "567890"));
const func7 = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
console.log(func7(10, 20));
const func8 = (a, b, c = 10) => {
    return a + b + c;
};
console.log(func8(10, 10));
console.log(func8(10, 10, 20));
const func9 = (a = 10, b, c) => {
    return a * b * c;
};
console.log(func9(undefined, 10, 10));
const func10 = (...params) => {
    return params.reduce((prev, next) => prev + next);
};
console.log(func10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const func11 = (...params) => {
    return params.reduce((prev, curr) => prev + curr);
};
console.log(func11("a", "b", "c", "d", "e", "f"));
//
const createErro = (errMsg) => {
    throw new Error(errMsg);
};
// console.log(createErro("erro"));
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i >= 100)
            break;
    }
};
//
const isNumber = (a) => {
    return typeof a === "number" ? true : false;
};
const isString = (a) => {
    return typeof a === "string" ? true : false;
};
const numberOrString = (a) => {
    if (isString(a))
        return "string";
    if (isNumber(a))
        return "number";
    if (typeof a === "undefined")
        return "undefined";
};
console.log(numberOrString("abd"));
console.log(numberOrString(123));
