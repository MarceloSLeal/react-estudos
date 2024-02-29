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

class Dealership  extends Car {
    constructor (
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
