const { use } = require("react");

const myArr = ["Mumbai", "Goa", "Delhi"];
// console.log(myArr);
// console.log(myArr[0])

//Array methods

// console.log(myArr.length);
// console.log(myArr.reverse());
// console.log(myArr.push("Kolkata"));
// console.log(myArr);
// console.log(myArr.pop());
// console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr);
// console.log(myArr.unshift("Shimla"));
// console.log(myArr);
// console.log(myArr.includes("Mumbai"));
// console.log(myArr.indexOf("Shimla"));

const myArr2 = ["Rajashtan"];
// console.log(myArr.concat(myArr2));
const myArr3 = myArr.join();
// console.log(myArr3);

// const mynum = myArr.slice(1,2)
// console.log(mynum);
// console.log(myArr);

// const mynum = myArr.splice(0,1,"a")
// console.log(mynum);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

// const user = {
//   name: "raj",
//   password: "123",
// };
// console.log(user["name"]);

// user.name = "nevil";
// console.log(user);

// user.greeting = function () {
//   console.log("Hello");
// };
// user.greeting();

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    name: "raj",
  },
  {
    name: "nevil",
  },
  {
    name: "ray",
  },
];
console.log(users[0].name);
console.log(Object.keys(users[0]));
console.log(Object.values(users[0]));
