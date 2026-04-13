//Array []

// const val = ["sudan", 345, "asds", null, undefined, [3, 4, 5, 6], {}, () => {}];
// console.log(val);

// const fruits = ["apple", "mango", "banana", "orange"];
// const value = fruits.length;
// console.log(fruits, value);

//adding items

// fruits.push("watermelon"); //pushes on the last
// console.log(fruits);
// fruits.unshift("kiwi"); //adds to the front

// fruits.splice(2, 0, "plum"); //(index, center value is 0 if we are not deleting anything)
// console.log(fruits);
//deleting items from the array
// fruits.pop(); //take the items from the last by default
// const val = fruits.shift(); //last fruit is removed and assigned to variable val and it is out of the array
//  ['apple', 'mango', 'banana'] 'orange'
// const val = fruits.splice(2, 2); //no items to remove from array as 0 is given and it will assign that to array val, splice will create an array

// const val = fruits.slice(2, 2); //go to index 2 and until 2 but not include 2
// const val = fruits.slice(2, 4); //it will not modify the original one
// const val = fruits.toString();//to string
// const val = fruits.toString().split(",");//to string and again to array

// const val = fruits.indexOf("mangos");//gives -1 if not found
// const val = fruits.includes("mangos"); //returns true or false
// const val = fruits.join("_");//converts into string with _
// console.log(fruits.sort()); //sorts in alphabetical if there are strings
// console.log(fruits, val);
// console.log(fruits.sort((a, b) => a - b));

// fruits.reverse();
// console.log(fruits);

//loops
//for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//while loops
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//break and continue

// for (let i = 0; i <= 100; i++) {
//   //   console.log(i);
//   //   if (i == 10) {
//   //     break;
//   //   }

//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// java array specific loops

//for /of for(x of cars). -> for ()array
// const fruits = ["apple", "mango", "banana", "orange"];
// console.log(fruits);
// const upperFruits = [];

// for (let item of fruits) { //it will access all items from fruit
//   upperFruits.push("sku-" + item.toUpperCase());
//   console.log(item);
// }
// console.log(upperFruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//for each()
//for each()will not allow to create new array. you have to create an empty array and keep pushing to that array
// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
//map() helps to create new array unlike foreach()
// const newData = fruits.map((item, i) => {
//   if (item.includes("n")) {
//     return item;
//   }
//   //   console.log(item, i);
//   //   return "SKU" + item.toUpperCase();
// });

//filter ()

// const newData = fruits.filter((item, i) => item.includes("n")); //removed the curly bracket  item.includes("n")
// //   return item.includes("n");it works same as
// //   //   if (item.includes("n")) {
// //   //     return true;
// //   //   } else {
// //   //     return false;
// //   //   }

// console.log(newData);

// reduce()

// const money = [12, 234, 3456, 345, 345, 345, 6534];
// const total = money.reduce((subtotal, item) => {
//   return subtotal + item;
// }, 0); //0 is the initial value to add
// console.log(money);
// console.log(total);

//every()
// const fruits = ["apple", "mango", "banana", "orange"];
// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("a"); //test condition
// });

// console.log(result);

//includes(), find and indexOf()

// const money = [12, 234, 3456, 345, 345, 345, 6534];
// // const result = money.includes(12); //returns boolean true or false
// // const result = money.find((item) => {
// //   return item === 3245;
// // });
// // const result = money.find((item) => item === 3245); //anonymous function

// const result = money.indexOf(12); //returns index if present in array
// //returns -1 if there are no items present
// console.log(result);

// const arrays = new Array(10).fill("💕");

// console.log(arrays);

//  Challenge #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically

//2. sort the array in descending order

//3. get total of the array

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

// 5. remove duplicate number for the original array

// const Arrays = new Array(50).fill(Math.random());
// const randomArrays = Arrays * 10;
// const array = [];

// for (let i = 0; i < 50; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }

// console.log("Original:", array);

// // Create sorted copy
// const sortedArray = [...array].sort((a, b) => a - b);
// console.log("Sorted:", sortedArray);

// // Split function
// const splitArray = (arr) => {
//   const mid = Math.ceil(arr.length / 2);
//   return [arr.slice(0, mid), arr.slice(mid)];
// };

// const result = splitArray(sortedArray);
// console.log("Split:", result);
//  Challenge #1

// // 1. create an array of 50 random numbers range between 1 and 100 programmatically
// const arg = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg[i] = num;
// }
// //2. sort the array in descending order
// arg.sort((a, b) => b - a);
// // console.log(arg);

// //3. get total of the array
// const total = arg.reduce((acc, num) => acc + num);

// console.log(total);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.
// const evenArg = arg.filter((item) => item % 2 === 0);
// const oddArg = arg.filter((item) => item % 2 !== 0);

// console.log(evenArg, oddArg);

// 5. remove duplicate number for the original array
// const uniqueArg = [...new Set(arg)];
// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }

// const uniqueArg = [];
// for (let i = 0; uniqueArg.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
//   //   console.log(i);
// }
// console.log(uniqueArg);
