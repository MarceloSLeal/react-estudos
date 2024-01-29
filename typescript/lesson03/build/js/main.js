"use strict";
let stringArr = ['one', 'hey', 'Marcelo'];
let guitars = ['strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('he');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Ramones');
// Tuple
let myTuple = ['Marcelo', 42, true];
let mixed = ['Marcelo', 1, false];
mixed = myTuple;
myTuple = mixed;
myTuple[1] = 42;
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: 'Marcelo',
    prop2: true,
};
exampleObj.prop2 = false;
exampleObj.prop1 = 'Leo';
let evh = {
    name: 'Eddie',
    active: false,
    albuns: [1984, 5150, 'OU812'],
};
let jp = {
    active: true,
    albuns: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade[4]);
