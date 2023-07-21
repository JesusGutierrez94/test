import { add, subtract,  multiply, division, exponentiate } from "../calculator";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplies two numbers correctly", () => {
  expect(multiply(3, 5)).toBe(15);
});

test("divides two numbers correctly", () => {
  expect(division(25, 5)).toBe(5);
});

test("exponentiates two numbers correctly", () => {
  expect(exponentiate(3, 2)).toBe(9);
});
