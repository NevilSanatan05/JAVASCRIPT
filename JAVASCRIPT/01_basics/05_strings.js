const gameName = new String("hitesh-hc");
console.log(gameName);
console.log(gameName.length); // Output: 35
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t")); // Output: 15
const newString = gameName.substring(2, 5);
console.log(newString); // Output: tes

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // Output: tes

const name = "         hitesh  ";
console.log(name);

console.log(name.trim()); // Output: "hitesh"
const url = "https://www.hiteshchoudhary%20choudhary";
console.log(url.replace("%20", "-")); // Output: "https://www.hiteshchoudhary-choudhary"
console.log(gameName.split(":")); // Output: [ 'hitesh', 'hc' ]
console.log(gameName);

