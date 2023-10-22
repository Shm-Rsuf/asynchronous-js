/* syncronous javascript */

// function f1() {
//   console.log("I am f1");
// }

// function f2() {
//   f1();
//   console.log("I am f2");
// }

// function f3() {
//   f2();
//   console.log("I am f3");
// }

// f3();

/* asyncronous javascript */
// function printMe() {
//   console.log("Print me");
// }

// function test() {
//   console.log("I am test function");
// }

// setTimeout(printMe, 0);
// test();

/* Promise in javascript */
// const type = false;
// new Promise((resolve, reject) => {
//   if (type) {
//     resolve("Promise is resolved");
//   } else {
//     reject("Promise is rejected");
//   }
// })
//   .then((resule) => console.log(resule))
//   .catch((error) => console.log(error));

/* promise and wev api's */
// function f1() {
//   console.log("I am f1");
// }

// function f2() {
//   console.log("I am f2");
// }

// function main() {
//   console.log("I am main");
//   setTimeout(f1, 0);

//   new Promise((resolve, reject) => {
//     let test = true;
//     if (test) {
//       resolve("I am resolve function");
//     } else {
//       reject("I am reject function");
//     }
//   })
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

//   f2();
// }

// main();

/* Promise and resolve & rejected */

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error("water not found"));
//   }, 2000);
// });

// promise.catch(function (error) {
//   console.log(error.message);
// });

/* callback function */
// orderFood("test", "test", print);

// function print(msg) {
//   console.log(msg);
// }

// function orderFood(test, test, callback) {
//   console.log(`Your ${test}, ${test} is ordered`);

//   setTimeout(() => {
//     const msg = `Your ${test}, ${test} is ready`;
//     callback(msg);
//   }, 3000);
// }
