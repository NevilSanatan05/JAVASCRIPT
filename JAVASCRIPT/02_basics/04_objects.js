// const tinder = new Object();
const tinder = {};
tinder.id = 1;
tinder.name = "Tinder";
tinder.isActive = true;

// console.log(tinder);

const regularUser = {
  email: "raj2gmail.com",
  fullname: {
    userfullname: {
      firstname: "Raj Kumar",
      lastname: "Singh",
    },
  },
};
// const{email}= regularUser;
// console.log(email);


// console.log(regularUser);
// console.log(regularUser.fullname);


const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"a",5:"b",6:"c"};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1,...obj2};
// console.log(obj3);


const users = [
{
  id:1,
  email :"raj@gmail.com",
},
{
  id:2,
  email :"nevil@gmail.com",
},
];
users[1].email 
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty("number"));


const course = {
  courseName: "JavaScript",
  price:999,
  courseInstructor: "Raj",
}

// course.courseInstructor

// const{courseInstructor} = course;
const{courseInstructor:instructor} = course;
// console.log(courseInstructor);
console.log(instructor);


