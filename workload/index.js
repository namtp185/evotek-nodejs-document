
// The data (if query and logic are successful) will be passed through to callback function 
// from bottom to top of the callstack
const data = {
  hello: "hi",
};

const workload1 = () => {
  setTimeout(function() {
    console.log("Hello from task that takes 5s")
  }, 3000);
};

// callbackFn
// resolve and reject param, to pass the control to promise
const workload2 = (resolve, reject) => {
  let myDate;
  // calculate, query data (heavy workload here)
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }
  resolve(myDate);
}

// callbackFn
const workload3 = (resolve, reject) => {
  // assert(typeof resolve === "function")
  // console.trace();
  // Heavy workload here, db query, network connection etc
  // ----------------------------
  //
  setTimeout(function() {
    console.log("Hello from task that takes 5s")
    resolve(data);
  }, 3000);
};

module.exports = {
  workload1,
  workload2,
  workload3,
};
