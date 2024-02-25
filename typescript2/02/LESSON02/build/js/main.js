"use strict";
let myName = 'Dave';
let meaningOfLife;
let isLoading;
let album;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = true;
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 10));
let postId;
let isActive;
const func1 = (post, active) => {
    let params = "";
    if (typeof post === "string") {
        params += "post = string ";
    }
    else {
        params += "post = number ";
    }
    if (typeof active === "number") {
        params += "active = number ";
    }
    else {
        params += "active = boolean ";
    }
    return params;
};
console.log(func1("Post01", 1));
console.log(func1(1, 1));
console.log(func1("Post02", true));
console.log(func1(2, false));
