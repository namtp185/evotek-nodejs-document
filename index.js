const fn = (cb) => {
  console.log("Callback function called");
  cb();
  console.log("End of function call");
}

const callbackFn = () => {
  timeConsumptionFn();
}

const timeConsumptionFn = () => {
  setTimeout(function() {
    console.log("Hello from task that takes 5s")
  }, 3000);
};


fn(callbackFn);