//map filter reduce

// map method returns a new array and will not modify the original one
const numbers = [1, 2, 3, 4];
// const newarr = numbers.map((n) => {
//   return n * n;
// });
const newarr = numbers.map((n) => n * n);
console.log(newarr);

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
    male: (product.male = "male"),
  };
});
console.log(discounts);
