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
