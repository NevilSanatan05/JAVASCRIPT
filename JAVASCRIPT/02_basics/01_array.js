const myArr = [1, 2, 3, 4, 5];
console.log('myArr:', myArr); // Output: myArr: [1, 2, 3, 4, 5]
// console.log('myArr.length:', myArr.length); // Output: myArr.length: 5
// console.log('myArr[0]:', myArr[0]); // Output: myArr[0]: 1
// console.log('myArr[myArr.length - 1]:', myArr[myArr.length - 1]); // Output: myArr[myArr.length - 1]: 5


myArr.push(6);
console.log('myArr after push:', myArr); // Output: myArr after push: [1, 2, 3, 4, 5, 6]
myArr.pop();
console.log('myArr after pop:', myArr); // Output: myArr after pop: [1, 2, 3, 4, 5]
myArr.unshift(0);
console.log('myArr after unshift:', myArr); // Output: myArr after unshift: [0, 1, 2, 3, 4, 5]
myArr.shift();
console.log('myArr after shift:', myArr); // Output: myArr after shift: [1, 2, 3, 4, 5]