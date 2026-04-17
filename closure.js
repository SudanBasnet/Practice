function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

const createCounter = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

const c1 = createCounter();
console.log(c1()); // 1
console.log(c1()); // 2

const c2 = createCounter();
console.log(c2()); // 1 (separate memory)
