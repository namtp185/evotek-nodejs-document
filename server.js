const express = require("express");
const app = express();

// const { 
//   fn,
//   workload1,
//   workload2,
// } = require("./callback");

const {
  fn: getPromiseFromCallback,
} = require("./promise");

const {
  workload1,
  workload2,
  workload3,
} = require("./workload");



const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  // const result = fn(workload1);
  // console.log(result);
  // res.json(result);

  getPromiseFromCallback(workload2).then((data) => {
    console.log(data); // --> 'done!'
    res.json(data);
  });

})

app.listen(port, () => {
  console.log(`server listening or port ${port}`);
})