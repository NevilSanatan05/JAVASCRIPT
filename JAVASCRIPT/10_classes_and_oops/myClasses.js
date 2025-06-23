// const { use } = require("react");

// //ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   user() {
//     return ` ${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai);
// console.log(chai.user());

// console.log(chai.encryptPassword());

//behind the scene
function User(username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
}

User.prototype.encrypt = function () {
  return ` ${this.password}abc`;
};
User.prototype.name = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "tragamil", "123");
console.log(tea);
console.log(tea.encrypt());
console.log(tea.name());
