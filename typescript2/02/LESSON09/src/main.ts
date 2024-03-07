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

type Students = "Marcelo" | "Rose" | "Leo o gato"
type LetterGrades = "A" | "B" | "C" | "D" | "F"

const finalGrades: Record< Students, LetterGrades > = {
    Marcelo: "A",
    Rose: "B",
    "Leo o gato": "D",
}

// Pick and Omit

interface TodoList {
    tittle: string,
    task: string,
    status: boolean,
}

type TodoImpl = Pick<TodoList, "tittle" | "task">;

const t1: TodoImpl = {
    tittle: "Study Harder", 
    task: "TypeScript",
}

type TodoImpl2 = Omit<TodoList, "task">;

const t2: TodoImpl2 = {
    tittle: "Try not to sleep",
    status: true,
}

////////////
// Exclude and Extract

type Notas = "A"| "B" | "C"| "D";

type ajustarNotas = Exclude<Notas, "D">;

type ajustarNotas2 = Extract<Notas, "B" | "C">;

const funcNotas1 = (notas: Notas) => {
    console.log(notas);
}

funcNotas1("A");

const funcNotas2 = (notas: ajustarNotas) => {
    console.log(notas);
}

funcNotas2("C");

const funcNotas3 = (notas: ajustarNotas2) => {
    console.log(notas);
}

funcNotas3("C");

type ajustarNotasExtract1 = Extract<Notas, "A" | "D">;

const funcNotas4 = (notas: ajustarNotasExtract1) => {
    console.log(notas);
}

funcNotas4("D");

///////////////

// Nonnullable

type TNonNullable1 = NonNullable<string | number | null>;

type TNonNullable2 = NonNullable<"Marcelo" | "Rose" | "Leo o Gato" | undefined | null>;

const funcNonNullable1 = (t: TNonNullable1) => {
    console.log(t);
}

funcNonNullable1("Zumbi");

const funcNonNullable2 = (t: TNonNullable2) => {
    console.log(t);
}

funcNonNullable2("Leo o Gato");

//////////////

// ReturnType

const f1 = (a: number, b: number) => {
   return a % b;
}

type typeReturnType = ReturnType<typeof f1>;

const returnType: typeReturnType = f1(10, 20);

console.log(returnType);

//////////////

// Parameters



