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
