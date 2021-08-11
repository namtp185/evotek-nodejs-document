// TODO: get dataflow clearly
const assert = require('assert');

// return Timeout object
// const workload1 = () => {
//   return setTimeout(function() {
//     console.log("Hello from task that takes 5s")
//     return {
//       hello: "hi",
//     };
//   }, 3000);
// };

// callback wrapper with promise
const fn = (callback) => {
  return new Promise((resolve, reject) => {
    console.log("Callback function called");
    // call the callback function.
    // We pass the resolve and reject, so we can fullfill or reject the promise
    // depends on the logic and state inside the callback (workload) function.
    // Example: search user not found.
    // Example: bad request: body missing required fields.
    callback(resolve, reject);
    console.log("End of function call");
  })
};

module.exports = {
  fn,
}