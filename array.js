const arr = [1, 2, 3, 4, 10];

// console.log(arr.length);

// console.log(arr[4]);

// // LIFO - Last In, First Out

// // Stack

// arr.push(20);

// console.log(arr);

// // pop();

// arr.pop();

// console.log(arr);

// // FIFO - First In, First Out
// // Queue

// // unshift();
// arr.unshift(0);

// console.log(arr);

// // shift();
// arr.shift();

// console.log(arr);

// // splice(start, deleteCount, ...addElement)

// arr.splice(2, 1, 30, 40, 50);

// console.log(arr);

// let str = ["a", "b", "c"];

// const mergedArr = arr.concat(str);

// console.log(mergedArr);

// Advanced Methods

// map(() => {})

// map((item) => {});

// const doubledArr = arr.map((num) => num * 2);

// console.log(doubledArr);
// console.log(arr);

// const users = [
//   {
//     name: "Josh",
//     age: 20,
//   },
//   {
//     name: "Josh",
//     age: 20,
//   },
//   {
//     name: "Josh",
//     age: 20,
//   },
// ];

// const userName = users.map((user) => {
//   return user.name;
// });

// console.log(userName);

// filter(() => {})

const evenNums = arr.filter((num) => num % 2 === 0);

console.log(evenNums);

// find(() => {})

const findevenNums = arr.find((num) => num % 2 === 0);

console.log(findevenNums);
// reduce(() => {})
// sort(() => {})
// forEach(() => {})
