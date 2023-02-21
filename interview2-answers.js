// T60: Remove duplicate strings from array

const array = ['a', 'A', 'B', 'C', 'C'];

const deduplicated = [...new Set(array)];

// O(n)
const deduplicated2 = [];
array.forEach((el) => {
  const found = deduplicated2.find((el2) => {
    return el2 === el;
  });
  if (!found) {
    deduplicated2.push(el);
  }
});

// O(n)
const deduplicated3Map = {};
array.forEach((el) => {
  const lcEl = el.toLowerCase();
  deduplicated3Map[lcEl] = el;
});
const deduplicated3 = Object.values(el);

// ---------------------------------------------------------
// ---------------------------------------------------------

// T70: How to clone an object ?

const obj0 = { a: 1, b: 2 };
const obj1 = { a: { b: 1, c: 2 } };
const obj2 = { a: { b: 1, c: 2, f: () => console.log('Hi!') } };

const obj0Clone = { ...obj0 };
const obj1Clone = JSON.parse(JSON.stringify(obj1));
const obj2Clone = JSON.parse(JSON.stringify(obj2));
obj2Clone.a.f = obj2.a.f;

// ---------------------------------------------------------
// ---------------------------------------------------------

// T80: Implement Array.prototype.map

Array.prototype.map2 = function (visitor) {
  const res = [];
  this.forEach((e, i) => {
    res.push(visitor(e, i, this));
  });
  return res;
};

// ---------------------------------------------------------
// ---------------------------------------------------------

// T90: Implement Function.prototype.bind

Function.prototype.bind2 = function (newThis, ...args) {
  return (...nextArgs) => {
    return this.apply(newThis, [...args, ...nextArgs]);
  };
};

// ---------------------------------------------------------
// ---------------------------------------------------------

// T120: Write a code that will check that a string has a valid sequence of opening and closing parentheses

const checkParentheses = (str) => {
  let pc = 0;
  for (const ch of str) {
    if (ch !== '(' && ch !== ')') {
      continue;
    }
    if (ch === '(') {
      pc++;
    } else if (ch === ')') {
      pc--;
    }
    if (pc < 0) {
      return { ok: false, reason: 'Bad )' };
    }
  }
  if (pc !== 0) {
    return { ok: false, reason: 'Bad (' };
  }
  return { ok: true };
};

// (TS) NJS-130:

type ArrayType = Array<boolean | number | Array<string> | { firstName: string, lastName?: string }>;
