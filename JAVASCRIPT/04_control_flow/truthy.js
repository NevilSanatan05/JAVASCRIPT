// // // const useremail = "admin@gmail.vom"

// // // falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values
// "0","false","".[],{},function(){}



//Nullish  Coalescin Operator (??) : null undefined

let val1
// val1 = 5??10;
// val1 = null ?? 10
// val1 = undefined??15
// val1= null??10??20
// console.log(val1);


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 90
  ? console.log('More than 90')
  : console.log('Less than 90');
