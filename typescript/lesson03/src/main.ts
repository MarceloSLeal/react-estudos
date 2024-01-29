let stringArr = ['one', 'hey', 'Marcelo'];

let guitars = ['strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('he');

guitars[0] = 1984;
guitars.unshift('Jim');

let test = [];
let bands: string[] = [];
bands.push('Ramones');

// Tuple
let myTuple: [string, number, boolean] = ['Marcelo', 42, true];

let mixed = ['Marcelo', 1, false];

mixed = myTuple;
myTuple = mixed;

myTuple[1] = 42;

// Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};

const exampleObj = {
    prop1: 'Marcelo',
    prop2: true,
}

exampleObj.prop2 = false;
exampleObj.prop1 = 'Leo';

interface Guitarist {
    name?: string,
    active: boolean,
    albuns: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albuns: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
    active: true,
    albuns: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
   return 'Hello!';
}

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade[4]);