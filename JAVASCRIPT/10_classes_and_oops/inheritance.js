class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new Course is added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "@gmail.com", "123");
// console.log(chai);
chai.addCourse();

const masala = new User("masalachai");
masala.logMe();

console.log(chai instanceof User);
// console.log(User instanceof chai);
