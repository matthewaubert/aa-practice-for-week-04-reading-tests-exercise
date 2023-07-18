// return true if num is 5, otherwise false
function isFive(num) {
  if (num === 5) return true;
  return false;
}

// return true if num is odd, else return false
function isOdd(number) {
  if (typeof number !== "number") throw new Error("Must input a number.");

  if (number % 2 === 0) return false;
  return true;
}

// return array of numbers: range from min to max by step
function myRange(min, max, step) {
  // empty array
  const arr = [];

  // if step not provided
  if (step === undefined) {
    // iterate from min to max (inclusive) by 1
    for (let i = min; i <= max; i++) {
      // push i to array
      arr.push(i);
    }
  // if step provided
  } else {
    // iterate from min to max by step
    for (let i = min; i <= max; i += step) {
      // push i to array
      arr.push(i);
    }
  }

  // return array
  return arr;
}

module.exports = {
  isFive: isFive,
  isOdd: isOdd,
  myRange: myRange
}