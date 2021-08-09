const express = require("express");
const app = express();

const { fn, callbackFn } = require("./service");

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  const result = fn(callbackFn);
  console.log(result);
  res.json(result)
})

app.listen(port, () => {
  console.log(`server listening or port ${port}`);
})