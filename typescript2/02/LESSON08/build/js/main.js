"use strict";
const echo = (arg) => arg;
console.log(echo("ABCD"));
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj(1234));
console.log(isObj(":LKDSF:LKSJD"));
console.log(isObj({ name: "Marcelo" }));
console.log(isObj(null));
const checkReturn = (arg) => {
    if (Array.isArray(arg)) {
        return { value: arg, is: false };
    }
    return { value: arg, is: true };
};
console.log(checkReturn("ABCD"));
const func1 = (argA, argB) => {
    return { prop1: argA, prop2: argB };
};
console.log(func1("ParametroA", 1234));
