function add(x,y){
  return x + y;
}
// console.log(add(2,5));

function login(username){
  if(username === undefined || username === null || username === ""){
console.log('Username is required');
return;
}
return `Welcome ${username}`;
}
// console.log(login("raj"))
// console.log(login(""))


function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(220,798,420));



const user = {
  username:"raj",
  price:199
}
function handleObject(anyObject) {
  // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
// handleObject(user)
handleObject({
  username:"sam",
  price:399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));
