let str = "kraftz Cido";

let lastChar = str[str.length - 1];

console.log(lastChar);

// at()
// charAt()

let getchar = str.charAt(-1);

console.log(getchar);

// indexOf()
// lastIndexOf()

let getindex = str.indexOf("k");

console.log(getindex);

// includes();
let isInclude = str.includes("y");

console.log(isInclude);

// startsWith()
// endsWith()

let isStartWith = str.startsWith("k");
console.log(isStartWith);

// slice();
// subStr()

let isSlice = str.slice(3, 5);

console.log(isSlice);

console.log(isSubStr);

// split();
// join();

let isSplit = str.split("");

console.log(isSplit);

let isJoin = isSplit.join("");

console.log(isJoin);
