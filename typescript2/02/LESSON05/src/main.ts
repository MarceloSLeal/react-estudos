type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "Oi";
let b = a as Two;
b = "string";
b = 123;
let c = a as Three;

//

let d = <One>"World";
let e = <string>"string";
let f = <string | number> "string";
f = 1234;
let g = <number | One> 1234;

const addOrConcat = (a: number, b: number, c: "add" | "concate"): number | string => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}

let varA: string = addOrConcat(10, 10, "concate") as string;
console.log(varA);
let varB: number = addOrConcat(10, 10, "add") as number;
console.log(varB);

const sumOrBoolean = (a: number, b: number, c: boolean): number | boolean => {
    if (c === true) {
        return a + b;
    }
    return c;
}

let varC: number = sumOrBoolean(20, 20, true) as number;
console.log(varC);
let varD: boolean = sumOrBoolean(10, 10, false) as boolean;
console.log(varD);

const sumOrBoolComp = (a: number, b: number): number | boolean => {
    if (a + b > 10) {
        return true;
    } else {
        return a + b;
    }
}

let varE: boolean | number = sumOrBoolComp(10, 30);
console.log(varE);
let varF: boolean | number = sumOrBoolComp(2, 2);
console.log(varF);
