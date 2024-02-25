let myName: string = 'Dave';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'John'
meaningOfLife = 42;
isLoading = true;
album = true;

const sum = (a: number, b: number) => {
  return a + b;
}
console.log(sum(10, 10));

let postId: string | number;
let isActive: number | boolean;

const func1 = (post: string | number, active: number | boolean): string => {
  let params: string = "";

  if (typeof post === "string") {
    params += "post = string ";
  } else {
    params += "post = number ";
  }

  if (typeof active === "number") {
    params += "active = number ";
  } else {
    params += "active = boolean ";
  }

  return params;
}

console.log(func1("Post01", 1));
console.log(func1(1, 1));
console.log(func1("Post02", true));
console.log(func1(2, false));
