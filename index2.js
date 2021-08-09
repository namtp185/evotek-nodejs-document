const assert = require('assert');

const fn = (cb) => {
  console.log("Callback function called");
  cb();
  console.log("End of function call");
}

const callbackFn = () => {
  timeConsumptionFn();
}

// return Timeout object
// const timeoutFn = () => {
//   return setTimeout(function() {
//     console.log("Hello from task that takes 5s")
//     return {
//       hello: "hi",
//     };
//   }, 3000);
// };

// callback wrapper with promise
const promiseWrapperTimeout = (callbackFnReturnTimeout) => {
  return new Promise((resolve, reject) => {
    console.log("Callback function called");
    callbackFnReturnTimeout(resolve);
    console.log("End of function call");
  })
};

// callbackFn
const timeoutFn = (resolve) => {
  // assert(typeof resolve === "function")
  console.trace();
  // Heavy workload here, db query, network connection etc
  // ----------------------------
  //
  setTimeout(function() {
    console.log("Hello from task that takes 5s")
    resolve({hello: "hi"});
  }, 3000);
};

promiseWrapperTimeout(timeoutFn).then(function(data) {
  console.log(data); // --> 'done!'
});


console.log("current stack trace");
