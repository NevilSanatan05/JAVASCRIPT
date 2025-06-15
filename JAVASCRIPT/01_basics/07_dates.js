let my = new Date();
console.log('Current Date and Time:', my.toString()); // Output: Current Date and Time: [current date and time]

console.log('my.toDateString():', my.toDateString()); // Output: Current Date in human-readable format
console.log(my.toLocaleString());

let time = Date.now();
console.log('Current Timestamp:', time); // Output: Current Timestamp in milliseconds since January 1, 1970


let newDate = new Date();
console.log('New Date Object:', newDate); // Output: New Date Object with current date and time

console.log('newDate.getFullYear():', newDate.getFullYear()); // Output: Current year
console.log('newDate.getMonth():', newDate.getMonth()); // Output: Current month (0-11)
