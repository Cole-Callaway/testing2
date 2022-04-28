const { greeting } = require("./functions");
const myFunctions = require("./functions");

test("Return Two test", () => {
  expect(myFunctions.returnTwo()).toBe(2);
});

test("Greeting test", () => {
  //   expect(myFunctions.greeting("James")).toBe("Hello James.");
  expect(myFunctions.greeting("Jill")).toBe("Hello Jill.");
});

test("addition test", () => {
  expect(myFunctions.add(13, 2)).toBe(15);
});
