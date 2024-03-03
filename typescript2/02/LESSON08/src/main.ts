const echo = <T>(arg: T): T => arg;

console.log(echo<string>("ABCD"));

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true));
console.log(isObj(1234));
console.log(isObj(":LKDSF:LKSJD"));
console.log(isObj({name: "Marcelo"}));
console.log(isObj(null));

///////////////////

interface IntReturn<T> {
    value: T,
    is: boolean,
}

const checkReturn = <T>(arg: T): IntReturn<T> => {
    if (Array.isArray(arg)) {
        return {value: arg, is: false}
    }
    return { value: arg, is: true }
}

console.log(checkReturn<string>("ABCD"));

/////////////

interface Int1<T> {
    prop1: T,
    prop2: number
}

const func1 = <T>(argA: T, argB: number): Int1<T> => {
  return { prop1: argA, prop2: argB }; 
}

console.log(func1<string>("ParametroA", 1234));

console.log("/////////////////");
console.log("/////////////////");

/////////////////////////////
/////////////////////////////

const getFirstElement = <T>(array: T[]): T => {
    return array[0];
}

const numbers = [1, 2, 3, 4];
const strings = ["A", "B", "C", "D"];

const firstNumber = getFirstElement<number>(numbers);
const firstString = getFirstElement<string>(strings);

console.log(firstNumber);
console.log(firstString);

const getDivideByArray = <T>(arr: T[], divided: number): T[] => {
    const arrInternal: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % divided === 0) {
            arrInternal.push(arr[i]);
        }
    }
    return arrInternal;
}

const arrayNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrayString: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "h", "i", "j", "k", "l", "m", "n", "o"];

console.log(getDivideByArray<number>(arrayNumber, 2));
console.log(getDivideByArray<string>(arrayString, 3));

type APIResponse<Data> = {
    data: Data;
    isErro: boolean;
}

const response: APIResponse<{name: string, age: number}> = {
    data: {
        name: "Marcelo",
        age: 43,
    },
    isErro: false,
}

type Response2Type = APIResponse<{key: number}>;

const resposne2: Response2Type = {
    data: {
    key: 1234},
    isErro: true
}

////////////////

class StateObject<T> {
    data: T

    constructor (data: T) {
        this.data = data;
    }

    get state(): T {
        return this.data;
    }

    set state(param: T) {
        this.data = param;
    }
}

const store1 = new StateObject<string>("ABC");
console.log(store1.state);
store1.state = "DEF";
console.log(store1.state);

const store2 = new StateObject<number>(123);
console.log(store2.state);
store2.state = 456;
console.log(store2.state);

const store3 = new StateObject<number[]>([1, 2, 3, 4]);
console.log(store3.state);
store3.state = [10];
console.log(store3);
