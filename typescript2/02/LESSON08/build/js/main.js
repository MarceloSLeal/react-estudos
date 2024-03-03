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
console.log("/////////////////");
console.log("/////////////////");
/////////////////////////////
/////////////////////////////
const getFirstElement = (array) => {
    return array[0];
};
const numbers = [1, 2, 3, 4];
const strings = ["A", "B", "C", "D"];
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
console.log(firstNumber);
console.log(firstString);
const getDivideByArray = (arr, divided) => {
    const arrInternal = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % divided === 0) {
            arrInternal.push(arr[i]);
        }
    }
    return arrInternal;
};
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrayString = ["a", "b", "c", "d", "e", "f", "g", "h", "h", "i", "j", "k", "l", "m", "n", "o"];
console.log(getDivideByArray(arrayNumber, 2));
console.log(getDivideByArray(arrayString, 3));
const response = {
    data: {
        name: "Marcelo",
        age: 43,
    },
    isErro: false,
};
const resposne2 = {
    data: {
        key: 1234
    },
    isErro: true
};
////////////////
class StateObject {
    constructor(data) {
        this.data = data;
    }
    get state() {
        return this.data;
    }
    set state(param) {
        this.data = param;
    }
}
const store1 = new StateObject("ABC");
console.log(store1.state);
store1.state = "DEF";
console.log(store1.state);
const store2 = new StateObject(123);
console.log(store2.state);
store2.state = 456;
console.log(store2.state);
const store3 = new StateObject([1, 2, 3, 4]);
console.log(store3.state);
store3.state = [10];
console.log(store3);
