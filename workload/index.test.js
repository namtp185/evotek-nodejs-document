const { workload1 } = require("./heavyWorkload");

test("workload 1", () => {
  expect(workload1()).toBe(undefined);
})