const { use } = require("react");

class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`Username is ${this.username}`);
    
  }
  static createId(){
    return `123`
  }
}

const chai = new User("hitesh")
console.log(chai.createId())
console.log(chai.logMe());
