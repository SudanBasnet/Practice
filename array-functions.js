//map filter reduce

// map method returns a new array and will not modify the original one
// const numbers = [1, 2, 3, 4];
// const newarr = numbers.map((n) => {
//   return n * n;
// });
// const newarr = numbers.map((n) => n * n);
// console.log(newarr);

//examples
const products = [
  { name: "laptop", price: 499, color: "white" },
  { name: "smartphone", price: 899, color: "black" },
  { name: "headphone", price: 50, color: "white" },
  { name: "tablet", price: 199, color: "grey" },
  { name: "keyboard", price: 210, color: "blue" },
];
const discounts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.5,
  };
});
// console.log(discounts);

//filter
// returns new array with the elements that pass the test

// const affordableproducts = products.filter((product) => product.price < 200);
// const affordableproducts = products.filter(
//   (product) => product.color === "white",
// );
// const affordableproducts = products.filter((product) =>
//   product.name.includes("phone"),
// );
const affordableproducts = products.filter((product) => {
  return product.color === "white" && product.price < 100;
});
// console.log(affordableproducts);

//reduce()
// reduce turns the array into a singlevalue

const prices = [2, 3, 4, 5, 6];

const totalprice = prices.reduce((total, currentprice) => {
  console.log(`${total} + ${currentprice} = ${total + currentprice}`);
  return total + currentprice;
}, 0);
//0 is the starting value for total and if we don't specify the starting value it will take the starting value of array as default which. is 2 in this case
//you can also give the initial value as empty string or array or anything you want to return it
console.log(totalprice);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(count);
