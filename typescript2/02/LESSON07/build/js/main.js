"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const count1 = {
    proc1: 10,
    proc2: 14,
    proc3: 22,
    proc4: -5,
};
const procFunction = (count) => {
    let total = 0;
    for (const c in count) {
        total += count[c];
    }
    return total;
};
console.log(procFunction(count1));
const str1 = {
    proc1: "A",
    proc2: "B",
    proc3: "C",
    Proc4: "D",
};
const strConcat1 = (str) => {
    let a = "";
    for (const b in str) {
        a += str[b];
    }
    return a;
};
console.log(strConcat1(str1));
const str2 = {
    prop1: "abc",
    prop2: "def",
    prop3: "ghi",
    prop4: "jkl",
};
const strUpperCase = (str) => {
    let strA = [];
    for (const s in str) {
        strA.push(str[s].toUpperCase());
    }
    return strA;
};
console.log(strUpperCase(str2));
const num1 = {
    Item1: 10,
    Item2: 20,
    Item3: 30,
    Item4: 40,
};
const funcNum1 = (num) => {
    let a = 0;
    for (const n in num) {
        a += num[n];
    }
    return a;
};
console.log(funcNum1(num1));
console.log(num1["Item5"]);
const student1 = {
    name: "Marcelo",
    GPA: 9,
    classes: ["Biology", "History", "Math", "Art"]
};
for (const key in student1) {
    console.log(key + " " + student1[key]);
}
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
///////
