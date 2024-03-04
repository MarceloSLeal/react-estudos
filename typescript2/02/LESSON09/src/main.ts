// Utility Types


// Partial

interface Assignment {
    studentId: string,
    tittle: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>)
: Assignment => {
    return {...assign, ...propsToUpdate}
}

let varInt1 = {studentId: "ABC", tittle: "Titulo", grade: 1, verified: true}
let varInt2 = {studentId: "DEF", verified: false}

const var1 = updateAssignment(varInt1, varInt2);
console.log(var1);

interface Props {
    sand: string,
    people: number,
    monsters: number,
    weapons: string,
}

const listProps = (listProps: Props, listUpdate: Partial<Props>): Props => {
    return {...listProps, ...listUpdate};
}

let varProp1: Props = {sand: "Arrakis", people: 100, monsters: 1, weapons: "sword"};

let varList1 = listProps(varProp1, {monsters: 10});
console.log(varList1);

//////////////////
// Required and Readonly

interface ListVerified {
    prop1: string,
    prop2: string,
    prop3: number,
    prop4?: boolean,
}

const funcRequired = (assign: Required<ListVerified>): ListVerified => {
    return {...assign};
}
const funcNotRequired = (assign: ListVerified): ListVerified => {
    return {...assign};
}

console.log(funcRequired({prop1: "A", prop2: "B", prop3: 1, prop4: true}));
console.log(funcNotRequired({prop1: "B", prop2: "C", prop3: 10}));

///////////////
// Record

interface Cars {
    name: string,
    model: string,
    brand: string, 
    km: number,
}

type brands = "BMW" | "PORCHE" | "FERRARI";

const carList: Record<brands, Cars> = {
    BMW: {name: "IDN", model: "IDN", brand: "BMW", km: 1000},
    PORCHE: {name: "Kayene", model: "IDN", brand: "Porche", km: 500},
    FERRARI: {name: "F1", model: "IDN", brand: "Ferrari", km: 2000},
}
