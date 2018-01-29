// Code your solutions in this file
function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("Welcome " + array[i] + "! You are employee #" + (i + 1) + ".");
  }
  return array;
}

function coinFlip() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let count = 0;
  while (coinFlip()) {
    count++;
  }
  return "You got " + count + " tails in a row!";
}
