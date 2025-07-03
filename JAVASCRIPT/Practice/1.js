//  function greet(name) {
//   //console.log("Hello",name);
// }
//  greet("Nevil");

//console.log(typeof null);

// Q1
 //console.log(typeof null);

// Q2
 // let x = 10;
 // if (true) {
 //   let x = 20;
   // console.log(x);
 // }
//console.log(x);

// Q3
// const arr = [1, 2, 3];
 // arr.push(4);
 //console.log(arr);

//   if (n % 2 == 0) {
    //console.log("Even");
//   } else {
//     //console.log("Odd");
 //   }
// }
 // odd(4);

//console.log(b);
// var b = 4;
//console.log(b);

// function outer() {
//    let name = "Nevil";
//   return function inner() {
 //     console.log(name);
 //   };
 // }
// const greet = outer();
 // greet(); // logs "Nevil"

 //   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
 //   return true;
 // }
// console.log(isPrime(8))

// console.log(this);

 // function sayHi() {
//   console.log(this);
 // }
 // sayHi();

// const user = {
 //   name: "Nevil",
//   greet: function () {
//     console.log(this.name);
//   }
// };
// user.greet(); // ✅ "Nevil"


// map – to transform data
 // const prices = [100, 200, 300];
// const updated = prices.map(p => p + 50); // [150, 250, 350]
 // console.log(updated);

// let marks = [2,3,4]
// let mark = marks.map(p=>p**2)
// console.log(mark);


// filter – to get some items
// const items = [1, 2, 3, 4];
// const even = items.filter(n => n % 2 === 0); // [2, 4]

// let num = [2,3,4,5,6,7,8]
// let nums = num.filter(n=>n%2==0)
// console.log(nums);

// reduce – to calculate totals
// const cart = [100, 200, 300];
// const total = cart.reduce((sum, price) => sum + price, 0); // 600

// const cart = [
//   { name: "Cable", price: 100 },
//   { name: "Phone Grip", price: 150 },
//   { name: "Stand", price: 120 }
// ];
// const names = cart.map(p=>p.name)
// console.log(names);
// const products = cart.filter(p=>p.price>120)
// console.log(products);
// const going = cart.reduce((sum,p)=>sum+p.price,0)
// console.log(going);


