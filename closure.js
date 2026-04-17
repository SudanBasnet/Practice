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

function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
    getBalance: () => balance,
  };
}

const account = bankAccount(1000);

console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance()); // 1300

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

//factory function is a reusable function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
