/**
 * DF: Format of the question header:
 *
 * (tech-tag+) code-id: name-id
 * task-or-question-text
 */

// (JS) NJS-10: Destructuring assignment 1
// What will console.log print ?

(() => {
  const person = { firstName: 'Dmytro', lastName: 'Matskevych' };
  const { lastName, firstName: givenName, middleName = 'Jay' } = person;
  console.log(givenName, middleName);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-20: Destructuring assignment 2

// Rewrite the `car` and `cdr` variables assignment using destructuring assignment

(() => {
  const array = [1, 2, 3, 4, 5];

  const car = array[0];
  const cdr = array.slice(1);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-30: Scope 1
// What will console.log print ?

(() => {
  let x = 1;
  const f = (x) => {
    x = 2;
  };
  f(x);
  console.log(x);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-40: Scope 2
// What will console.log print ?

(() => {
  let x = { y: 1 };
  const f = (x) => {
    x.y = 2;
  };
  f(x);
  console.log(x.y);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-50: Scope 3
// What will console.log print ?

(() => {
  let x = 1;
  const f = () => {
    x = 2;
  };
  f();
  console.log(x);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-60: Algorithms 1
// Remove duplicate strings from array

(() => {
  const array = ['a', 'A', 'B', 'b', 'C', 'C', 'D'];

  const deduplicate = (array) => {
    // TODO:
  };

  const deduplicatedArray = deduplicate(array);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-70: JS Basics 1
// How to clone an object ?

(() => {
  const obj0 = { a: 1, b: 2 };
  const obj1 = { a: { b: 1, c: 2 } };
  const obj2 = { a: { b: 1, c: 2, f: () => console.log('Hi!') } };

  // const obj0Clone = // TODO:
  // const obj1Clone = // TODO:
  // const obj2Clone = // TODO:
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-70: JS Basics 4
// In which order will console.log statements print ?

(async () => {
  const fetchResource1 = async (id) => {
    const res = await fetch(
      `https://example.com/resource-type-1/${id}`
    );
    const resJson = await res.json();
    console.log('fetchResource-1::res', resJson);
    return resJson;
  };

  const fetchResource2 = async (id) => {
    const res = await fetch(
      `https://example.com/resource-type-2/${id}`
    );
    const resJson = await res.json();
    console.log('fetchResource-2::res', resJson);
    return resJson;
  };

  const [res1, res2] = await Promise.all([
    fetchResource1(321),
    fetchResource2(123)
  ]);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-80: JS Basics 2
// Implement Array.prototype.map

(() => {
  const testMap2 = () => {
    const array = ['a', 'A', 'B', 'b', 'C', 'C', 'D'];

    const visitor = (el, i) => `#${i}: ${el}`;
    const processedArray = array.map(visitor);
    const processedArray2 = array.map2(visitor);

    const arraysAreTheSame = processedArray.every((el, i) => el === processedArray2[i]);
    return { ok: arraysAreTheSame };
  };

  // Array.prototype.map2 = // TODO:

  testMap2();
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-90: JS Basics 3
// Implement Function.prototype.bind

(() => {
  const testBind2 = () => {
    const obj = {
      a: '{{obj.a::1}}',
      fn(b, c, d) {
        return `this.a: ${this.a} b: ${b} c: ${c} d: ${d}`;
      }
    };
    const objToBindTo = { a: '{{objToBindTo.a}}' };
    const argsToBindTo = ['{{boundArg::b}}'];
    const argsToCallBoundFnsWith = ['{{callTimeArg::c}}', '{{callTimeArg::d}}'];
    const boundFn = obj.fn.bind(objToBindTo, ...argsToBindTo);
    const boundFn2 = obj.fn.bind2(objToBindTo, ...argsToBindTo);

    const isSameOutput = boundFn(...argsToCallBoundFnsWith) === boundFn2(...argsToCallBoundFnsWith);
    return { ok: isSameOutput };
  };

  // Function.prototype.bind2 = // TODO:

  testBind2();
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-100: JS General 1
// Explain this code please

(async () => {
  const fetch = require('node-fetch');

  const sleep = (sleepTimeMs) => new Promise((resolve) => setTimeout(resolve, sleepTimeMs));

  const getResource = async () => {
    const response = await fetch(
      `https://example.com/resource-1`
    );
    if (response.status !== 200) {
      throw new Error('Bad status code when trying to fetch resource');
    }
    return response.text();
  };

  const getResourceIn1Second = () => {
    return Promise.race([
      sleep(1000).then(() => {
        return Promise.reject(Symbol.for('TIMEOUT'));
      }),
      getResource()
    ]);
  };

  try {
    const response = await getResourceIn1Second();
    console.log('Response:', response);
  } catch (err) {
    console.error('Could not fetch the resource', err);
  }
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (JS) NJS-110: JS Basics 4
// What this code will be print to the stdout ?

(() => {
  let i = 10;
  while (--i) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
})();

// (JS) NJS-120: Algorithms 2
// Write a code that will check that a string has a valid sequence of opening and closing parentheses

(() => {
  const str0 = '(a * (b + c))'; // Correct
  const str1 = '(a * (b) + c))'; // Bad )
  const str2 = '(a * ((b + c))'; // Bad (

  const testCheckParentheses = (checkParentheses) => {
    const res0 = checkParentheses(str0);
    if (!res0 || !res0.ok) {
      return { ok: false };
    }
    const res1 = checkParentheses(str1);
    if (!res1 || res1.ok || res1.reason !== 'Bad )') {
      return { ok: false };
    }
    const res2 = checkParentheses(str2);
    if (!res2 || res2.ok || res2.reason !== 'Bad (') {
      return { ok: false };
    }
    return { ok: true };
  };

  const checkParentheses = (str: string): { ok: boolean; reason?: string } => {
    // TODO:
  };

  testCheckParentheses(checkParentheses);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (TS) NJS-130: TS Basics 1
// Make a type - `ArrayType` - that will conform to the content of an array - `arrayToType`

(() => {
  type ArrayType = void;
  const arrayToType: ArrayType = [
    true,
    { firstName: 'Dmytro' },
    1500,
    { firstName: 'Taras', lastName: 'Tymoshchuk' },
    ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'TypeORM'],
    false
  ];
})();


// ---------------------------------------------------------
// ---------------------------------------------------------

// (TS) NJS-140: TS Basics 2
// Rewrite types implemented with `interface` and `extends` keywords to use the `type` keyword and the type intersection operator

(() => {
  // Rewrite the `Animal` and `Bear` types using the `type` keyword and the type intersection operator

  interface Animal {
    name: string;
  }

  interface Bear extends Animal {
    honey: boolean;
  }

  const getBear = (): Bear => {
    return { name: 'Mark', honey: true };
  };

  const bear = getBear();
  console.log(bear.name, bear.honey);
})();

// ---------------------------------------------------------
// ---------------------------------------------------------

// (TS) NJS-150: TS General 1
// 1. Explain this code please
// 2. Is there anything here in this example that you want to do differently?
// 3. We have a problem where DevOps skills - `aws`, `gcp` and `azure` - are considered a backend skill

(() => {
  type Person = {
    firstName: string;
    lastName: string;
  };

  type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

  type DevSkills = Partial<{
    // Backend skills
    nodejs: SkillLevel;
    expressjs: SkillLevel;
    postgres: SkillLevel;
    mongodb: SkillLevel;

    // DevOps skills
    aws: SkillLevel;
    gcp: SkillLevel;
    azure: SkillLevel;

    // Frontend skills
    react: SkillLevel;
    angular: SkillLevel;
    webflow: SkillLevel;
    html: SkillLevel;
    css: SkillLevel;
  }>;

  type FullStackDev = Person & DevSkills;

  type FontendSkillName = 'react' | 'angular' | 'html' | 'css' | 'webflow';

  type BackendDev = Omit<FullStackDev, FontendSkillName>;
  type FrontendDev = Pick<FullStackDev, FontendSkillName | keyof Person>;

  const getFrontendDev = (): FrontendDev => {
    return {
      firstName: 'Ihor',
      lastName: 'Sokolov',
      react: 5,
      angular: 3
    };
  };

  const getBackendDev = (): BackendDev => {
    return {
      firstName: 'Anton',
      lastName: 'Stebelski',
      aws: 3,
      nodejs: 5,
      expressjs: 5
    };
  };
})();

// ---------------------------------------------------------
// ---------------------------------------------------------
