// Code your solutions in this file
function printBadges(arrayOfNames) {
  for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(`Welcome ${arrayOfNames[i]}! You are employee #${i + 1}.`);
  }
  return arrayOfNames;
};

function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.5) {
    count++;
  };
  return `You got ${count} tails in a row!`;
};
