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
console.log(affordableproducts);
