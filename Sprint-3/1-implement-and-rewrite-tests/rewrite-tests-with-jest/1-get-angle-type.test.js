// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test("should return 'Right angle' when angle is 90", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
test("should return 'Obtuse angle' when 90 < angle < 180", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
test("should return 'Straight angle' when angle is 180", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
test("should return 'Reflex angle' when 180 < angle < 360", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
test("should return 'Invalid angle' for invalid values", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
});
