const fn = (cb) => {
  console.log("Callback function called");
  const res = cb();
  console.log("End of function call");
  return res;
}

const callbackFn = () => {
  timeConsumptionFn();
}

const timeConsumptionFn = () => {
  setTimeout(function() {
    console.log("Hello from task that takes 5s")
    return {hi: "hello"};
  }, 3000);
};

module.exports = {
  fn,
  callbackFn,
}