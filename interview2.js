// (JS) NJS-10: What will console.log print ?

const o = { a: 1, b: 2 };
const { a, b: c } = o;
console.log(c);

// ---------------------------------------------------------
// ---------------------------------------------------------

const arr = [1, 2, 3, 4, 5];

// (JS) NJS-20: Rewrite the following two lines with one line (one statement) using destructuring assignment

const a = arr[0];
const b = arr.slice(1);

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-30: What will console.log print ?

let x = 1;
const f = (x) => {
  x = 2;
};
f(x);
console.log(x);

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-40: What will console.log print ?

let x = { y: 1 };
const f = (x) => {
  x.y = 2;
};
f(x);
console.log(x.y);

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-50: What will console.log print ?

let x = 1;
const f = () => {
  x = 2;
};
f();
console.log(x);

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-60: Remove duplicate strings from array

const array = ['a', 'A', 'B', 'C', 'C'];

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-70: How to clone an object ?

const obj0 = { a: 1, b: 2 };
const obj1 = { a: { b: 1, c: 2 } };
const obj2 = { a: { b: 1, c: 2, f: () => console.log('Hi!') } };

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-80: Implement Array.prototype.map

// Array.prototype.map2 = ;

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-90: Implement Function.prototype.bind

// Function.prototype.bind2 = ;

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-100: Describe this code please

const sleep = (sleepTimeMs) => new Promise((resolve) => setTimeout(resolve, sleepTimeMs));

const getResource = () => {
  return fetch(process.env.RESOURCE_URL);
};

const response = await Promise.race([
  sleep(3000).then(() => {
    return Promise.reject('TIMEOUT');
  }),
  getResource(),
]);

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-110: What this code will be print to the stdout ?

let i = 10;
while (--i) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// (JS) NJS-120: Write a code that will check that a string has a valid sequence of opening and closing parentheses

const str0 = '(a * (b + c))'; // Correct
const str1 = '(a * (b) + c))'; // Bad )
const str2 = '(a * ((b + c))'; // Bad (

// ---------------------------------------------------------
// ---------------------------------------------------------
