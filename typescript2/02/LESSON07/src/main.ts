// Index Signatures

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number,
// }
interface TransactionObj {
    [index: string]: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
}
console.log(todaysNet(todaysTransactions));

//////////////

interface CountProcess {
    [index: string]: number
}

const count1: CountProcess = {
    proc1: 10,
    proc2: 14,
    proc3: 22,
    proc4: -5,
}

const procFunction = (count: CountProcess): number => {
    let total = 0;
    for (const c in count) {
        total += count[c];
    }
    return total;
}
console.log(procFunction(count1));

/////////////////
interface Str1 {
    [index: string]: string
}

const str1: Str1 = {
    proc1: "A",
    proc2: "B", 
    proc3: "C",
    Proc4: "D",
}

const strConcat1 = (str: Str1): string => {
    let a: string = "";
    for (const b in str) {
        a += str[b];
    }
    return a;
}

console.log(strConcat1(str1));
/////////////////////

interface Str2 {
    [index: string]: string
}

const str2: Str2 = {
    prop1: "abc",
    prop2: "def",
    prop3: "ghi",
    prop4: "jkl",
}

const strUpperCase = (str: Str2): string[] => {
    let strA: string[] = [];
   for (const s in str) {
        strA.push(str[s].toUpperCase());
    } 
    return strA;
}

console.log(strUpperCase(str2));

/////////

interface Number1 {
    [index: string]: number,
    Item1: number,
    Item2: number,
    Item3: number,
}

const num1: Number1 = {
    Item1: 10,
    Item2: 20,
    Item3: 30,
    Item4: 40,
}

const funcNum1 = (num: Number1): number => {
    let a: number = 0;

    for (const n in num) {
        a += num[n]
    }

    return a;
}

console.log(funcNum1(num1));
console.log(num1["Item5"]);

///////////////////

interface Student {
    [key: string]: number | string | string[] | undefined
    name: string,
    GPA: number,
    classes?: string[],
}

const student1: Student = {
    name: "Marcelo",
    GPA: 9,
    classes: ["Biology", "History", "Math", "Art"]
}

for (const key in student1) {
    console.log(key + " " + student1[key]); 
}
//////////


type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
///////
