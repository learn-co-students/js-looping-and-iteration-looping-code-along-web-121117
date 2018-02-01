// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let coinFace = "tails";
  let count = 0;

  while (coinFace == "tails") {
    let coinFlip = Math.random();

    if (coinFlip < 0.5) {
      coinFace = "heads";
    } else {
      count += 1;
    }
  }
  return `You got ${count} tails in a row!`;
}
