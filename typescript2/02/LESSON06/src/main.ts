class Coder {

    secondLang!: string;

    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string = "Java",
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return this.age;
    }
}

const Marcelo = new Coder("Marcelo", "Punk", 43);
console.log(Marcelo.getAge());

///////////
enum InstaType {
    Photoghaphy = "Photography",
    Video = "Video",
    Blog = "Blog",
    Meme = "Meme",
}
let tipo1: InstaType = InstaType.Photoghaphy;

class Insta {

    constructor(
        public name: string,
        public type: InstaType,
        public followers: number,
        protected following: number,
        private blocked: number,
    ) {
        this.name = name;
        this.type = type;
        this.followers = followers;
        this.following = following;
    }
    public getBlocked() {
        return this.blocked;
    }
}

const insta1 = new Insta("Marcelo", tipo1, 10000, 100, 200);
console.log(insta1);

class SocialMedia extends Insta {

    constructor(
        public company: string,
        name: string,
        type: InstaType,
        followers: number,
        following: number,
        blocked: number,
    ) {
        super(name, type, followers, following, blocked)
        this.company = company;
    }
}

const Sara = new SocialMedia("Google", "Sara", InstaType.Blog, 1000, 500, 10);
console.log(Sara.getBlocked());

///////////////////////

class Car {
    constructor(
        private owner: string,
        public model: string,
        public year: number,
        public brand: string
    ) {
        this.owner = owner;
        this.model = model;
        this.year = year;
        this.brand = brand;
    }
    public getOwner() {
        return this.owner;
    }
}

class Dealership extends Car {
    constructor(
        public store: string,
        owner: string,
        model: string,
        year: number,
        brand: string,
    ) {
        super(owner, model, year, brand);
        this.store = store;
    }
}
const store1 = new Dealership("Store1", "Marcelo", "Cruise", 2022, "GM");
console.log(store1.getOwner());
console.log(store1);

////////

class SubwayLines {
    constructor(
        public colorLine: string,
        public numerOfCars: number,
        public passPerDay: number,
        private operational: string,
    ) {
        this.colorLine = colorLine;
        this.numerOfCars = numerOfCars;
        this.passPerDay = passPerDay;
        this.operational = operational;
    }
    public getOperational() {
        return this.operational;
    }
}

let line1 = new SubwayLines("red", 20, 100000, "For operational use only");
let line2 = new SubwayLines("blue", 15, 200000, "Blue operations");
let line3 = new SubwayLines("green", 18, 120000, "green day operations");

const linesVar: SubwayLines[] = [line1, line2, line3];

linesVar.forEach(lines => {
    console.log(lines.colorLine);
    console.log(lines.getOperational());
});

/////////////////

enum Payment {
    cash = "cash",
    credictCard = "credictCard"
}

interface Accomodation {
    checkIn: Date,
    checkOut: Date,
    value: number,
    paymentMethod(payment: Payment): string
}

class Hostel implements Accomodation {
    checkIn: Date;
    checkOut: Date;
    value: number;
    public paymentM: Payment;
    constructor(
        checkIn: Date,
        checkOut: Date,
        value: number,
        paymentM: Payment,
    ) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.value = value;
        this.paymentM = paymentM;
    }
    public paymentMethod(payment: Payment) {
        return payment;
    }

}

let dateIn: Date = new Date(2024, 3, 10, 12, 0, 0, 0);
let dateOut: Date = new Date(2024, 3, 12, 12, 0, 0, 0);
const hostel1 = new Hostel(dateIn, dateOut, 500, Payment.credictCard);
console.log(hostel1);
console.log(hostel1.checkIn.toLocaleString());
console.log(hostel1.checkOut.toLocaleString());

//////

class CountStatic {
    static count: number = 0;

    static getCount(): number {
        return CountStatic.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++CountStatic.count
    }
}

const count1: CountStatic = new CountStatic("Marcelo");
const count2: CountStatic = new CountStatic("Rose");
const count3: CountStatic = new CountStatic("Leo o gato");

console.log(CountStatic.getCount());

///////

class Factory {
    private process: string[];

    constructor () {
        this.process = []
    }

    public get _process (): string[] {
        return this.process;
    }
    public set _process(insert: string) {
        this.process.push(insert);
    }
}

let fac1 = new Factory();
fac1._process = "A";
fac1._process = "B";
fac1._process = "C";

fac1._process.forEach(arr => console.log(arr));
console.log(fac1._process);
