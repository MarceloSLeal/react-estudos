type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber;

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray,
}

type UserID = stringOrNumber;

const funcao1 = (param1: number, param2: number): number => {
    return param1 + param2;
}

const funcao2 = (message: any): void => {
    console.log(message);
}

funcao2("Oi");
funcao2(123);
funcao2(true);
funcao2(funcao1(10, 100));

/////

const func1 = (a: number, b: number): number => {
    return a + b;
}
const func2 = (a: number, b: number): number => {
    return a - b;
}
const func3 = (a: number, b: number): number => {
    return a * b;
}
const func4 = (a: number, b: number): number => {
    return a / b;
}

console.log(func4(func3(10, 20), func2(50, func1(200, 10))));

interface int1 {
    (a: number, b: number): number
}
interface int2 {
    (a: string, b: string): number
}

const func5: int1 = (c, d) => {
    return c * d;
}
const func6: int2 = (c, d) => {
    return c.length + d.length;
}
console.log(func6("1234", "567890"));

const func7 = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    } else {
        return a + b
    }
}
console.log(func7(10, 20));

const func8 = (a: number, b: number, c = 10): number => {
    return a + b + c;
}
console.log(func8(10, 10));
console.log(func8(10, 10, 20));

const func9 = (a: number = 10, b: number, c: number): number => {
    return a * b * c;
}
console.log(func9(undefined, 10, 10));

const func10 = (...params: number[]): number => {
    return params.reduce((prev, next) => prev + next);
}
console.log(func10(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const func11 = (...params: string[]): string => {
    return params.reduce((prev, curr) => prev + curr);
}
console.log(func11("a", "b", "c", "d", "e", "f"));

//

const createErro = (errMsg: string): never => {
    throw new Error(errMsg);
}

// console.log(createErro("erro"));

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i >= 100) break
    }
}

//

const isNumber = (a: any): boolean => {
    return typeof a === "number" ? true : false;
}
const isString = (a: any): boolean => {
    return typeof a === "string" ? true : false;
}

const numberOrString = (a: string | number): string | undefined => {
    if (isString(a)) return "string";
    if (isNumber(a)) return "number";
    if (typeof a === "undefined") return "undefined";
}

console.log(numberOrString("abd"));
console.log(numberOrString(123));
