"use strict";
class Coder {
    constructor(name, music, age, lang = "Java") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Marcelo = new Coder("Marcelo", "Punk", 43);
console.log(Marcelo.getAge());
///////////
var InstaType;
(function (InstaType) {
    InstaType["Photoghaphy"] = "Photography";
    InstaType["Video"] = "Video";
    InstaType["Blog"] = "Blog";
    InstaType["Meme"] = "Meme";
})(InstaType || (InstaType = {}));
let tipo1 = InstaType.Photoghaphy;
class Insta {
    constructor(name, type, followers, following, blocked) {
        this.name = name;
        this.type = type;
        this.followers = followers;
        this.following = following;
        this.blocked = blocked;
        this.name = name;
        this.type = type;
        this.followers = followers;
        this.following = following;
    }
    getBlocked() {
        return this.blocked;
    }
}
const insta1 = new Insta("Marcelo", tipo1, 10000, 100, 200);
console.log(insta1);
class SocialMedia extends Insta {
    constructor(company, name, type, followers, following, blocked) {
        super(name, type, followers, following, blocked);
        this.company = company;
        this.company = company;
    }
}
const Sara = new SocialMedia("Google", "Sara", InstaType.Blog, 1000, 500, 10);
console.log(Sara.getBlocked());
///////////////////////
class Car {
    constructor(owner, model, year, brand) {
        this.owner = owner;
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.owner = owner;
        this.model = model;
        this.year = year;
        this.brand = brand;
    }
    getOwner() {
        return this.owner;
    }
}
class Dealership extends Car {
    constructor(store, owner, model, year, brand) {
        super(owner, model, year, brand);
        this.store = store;
        this.store = store;
    }
}
const store1 = new Dealership("Store1", "Marcelo", "Cruise", 2022, "GM");
console.log(store1.getOwner());
console.log(store1);
////////
class SubwayLines {
    constructor(colorLine, numerOfCars, passPerDay, operational) {
        this.colorLine = colorLine;
        this.numerOfCars = numerOfCars;
        this.passPerDay = passPerDay;
        this.operational = operational;
        this.colorLine = colorLine;
        this.numerOfCars = numerOfCars;
        this.passPerDay = passPerDay;
        this.operational = operational;
    }
    getOperational() {
        return this.operational;
    }
}
let line1 = new SubwayLines("red", 20, 100000, "For operational use only");
let line2 = new SubwayLines("blue", 15, 200000, "Blue operations");
let line3 = new SubwayLines("green", 18, 120000, "green day operations");
const linesVar = [line1, line2, line3];
linesVar.forEach(lines => {
    console.log(lines.colorLine);
    console.log(lines.getOperational());
});
/////////////////
var Payment;
(function (Payment) {
    Payment["cash"] = "cash";
    Payment["credictCard"] = "credictCard";
})(Payment || (Payment = {}));
class Hostel {
    constructor(checkIn, checkOut, value, paymentM) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.value = value;
        this.paymentM = paymentM;
    }
    paymentMethod(payment) {
        return payment;
    }
}
let dateIn = new Date(2024, 3, 10, 12, 0, 0, 0);
let dateOut = new Date(2024, 3, 12, 12, 0, 0, 0);
const hostel1 = new Hostel(dateIn, dateOut, 500, Payment.credictCard);
console.log(hostel1);
console.log(hostel1.checkIn.toLocaleString());
console.log(hostel1.checkOut.toLocaleString());
//////
class CountStatic {
    static getCount() {
        return CountStatic.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++CountStatic.count;
    }
}
CountStatic.count = 0;
const count1 = new CountStatic("Marcelo");
const count2 = new CountStatic("Rose");
const count3 = new CountStatic("Leo o gato");
console.log(CountStatic.getCount());
