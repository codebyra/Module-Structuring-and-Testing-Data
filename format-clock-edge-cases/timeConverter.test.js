import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("converts midnight correctly", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("converts one minute after midnight", function () {
  assert.equal(formatAs12HourClock("00:01"), "12:01 am");
});

test("converts early morning time", function () {
  assert.equal(formatAs12HourClock("01:30"), "01:30 am");
});

test("converts last minute before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("converts noon correctly", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("converts one minute after noon", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});

test("converts afternoon time", function () {
  assert.equal(formatAs12HourClock("13:30"), "01:30 pm");
});

test("converts evening time", function () {
  assert.equal(formatAs12HourClock("18:45"), "06:45 pm");
});

test("converts last minute of the day", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("converts 09:59 correctly", function () {
  assert.equal(formatAs12HourClock("09:59"), "09:59 am");
});

test("converts 10:00 correctly", function () {
  assert.equal(formatAs12HourClock("10:00"), "10:00 am");
});

test("converts 12:59 correctly", function () {
  assert.equal(formatAs12HourClock("12:59"), "12:59 pm");
});

test("converts 13:00 correctly", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("converts 23:00 correctly", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});
