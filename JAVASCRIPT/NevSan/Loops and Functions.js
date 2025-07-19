let i =0;
for (let i = 0;  i<2; i++) {
  for (let j = 0; j < 2; j++) {
    // console.log(`The inner loop is ${j}`);
  }
  // console.log(`the outer loop is ${i}`);
  
}

//break and continue
for (let index = 1; index <= 5; index++) {
  if (index == 2) {
    //console.log('Detected 2');
     break;
    //continue;
  }
 //console.log(`Value of i is ${index}`);
 
}

let k =0;
while(k<5){
 // console.log(k);
  k++;
}

let score = 0;
do{
  //console.log(`The score is ${score}`);
  score++;
}
while(score<=10);

let fruits = ["apple","banana","orange","kiwi","mango"];
for (const fruit of fruits) {
  //console.log(`The fruit is ${fruit}`);
}

let animals = {
  dog: "bark",
  cat: "meow",
  cow: "moo"
}
for (const key in animals) {
 // console.log(key, animals[key]);
  }


function greet(name){
 // console.log( `Hello, ${name}!`);
}
greet("Nevil");

function add(a, b) {
  return a + b;
}
//console.log(add(5, 10));


let obj = {
  harry:98,
  rohan: 99,
  shubham: 100
}
for (const objs in obj) {
  console.log('The marks of ' + objs + ' are ' + obj[objs]);
  
}