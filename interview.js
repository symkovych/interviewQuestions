// What is destructuring assignment in JS ?

// What will console.log print ?

const o = { a: 1, b: 2 };
const { a, b: c } = o;
console.log(c);

// -----------------------------------
// -----------------------------------

const arr = [1, 2, 3, 4, 5];

// Rewrite the following two lines with one line (one statement) using destructuring assignment

const a = arr[0];
const b = arr.slice(1);

// const [a, ...b] = arr;

// -------

// What will console.log print ?

let x = 1;
const f = (x) => {
  x = 2;
};
f(x);
console.log(x);

// --

// What will console.log print ?

let x = { y: 1 };
const f = (x) => {
  x.y = 2;
};
f(x);
console.log(x.y);

// --

// What will console.log print ?

let x = 1;
const f = () => {
  x = 2;
};
f();
console.log(x);

// -------

// Remove duplicate strings from array

const array = ['a', 'A', 'B', 'C', 'C'];

const deduplicated = [...new Set(array)];

const deduplicated2 = [];
array.forEach((el) => {
  const found = deduplicated2.find((el2) => {
    return el2 === el;
  });
  if (!found) {
    deduplicated2.push(el);
  }
});

const deduplicated3Map = {};
array.forEach((el) => {
  const lcEl = el.toLowerCase();
  deduplicated3Map[lcEl] = el;
});
const deduplicated3 = Object.values(el);

// -------

// Clone an object

const newObj = { ...oldObj }; // Shallow
const newObj2 = JSON.parse(JSON.stringify(oldObj2)); // Deep

// -------

// Implement bind

// Function.prototype.bind2 = function (newThis, ...args) {
//   return (...nextArgs) => {
//     return this.apply(newThis, [...args, ...nextArgs])
//   }
// }

// Ask what happens when arrow fn is used
Array.prototype.map2 = function (visitor) {
  const res = [];
  this.forEach((e, i) => {
    res.push(visitor(e, i, this));
  });
  return res;
};

// -------

// Describe this code please

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

// -------

//

const fn = () => {
  return;
  {
    a: true;
  }
};
console.log(fn().a);

// -------

//

let i = 10;
while (--i) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// -------

const str = '(())';
const checkParens = (str) => {
  let c = 0;
  str.split('').forEach((ch) => {
    if (ch !== '(' && ch !== ')') {
      return;
    }
    if (ch === '(') {
      c++;
    } else if (ch === ')') {
      c--;
    }
    if (c < 0) {
      throw new Error('Bad )');
    }
  });
  if (c !== 0) {
    throw new Error('Bad (');
  }
};

// -------

// Palindrom

// -------

// What is keyword super()

super();

// -------
