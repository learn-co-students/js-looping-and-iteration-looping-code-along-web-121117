// Code your solutions in this file


function tailsNeverFails(){
  let i = 0
  let x = 0
  while (x < 0.5) {
    x = Math.random();
    i++
  }
  console.log(`You got ${i} tails in a row!`);
}
// tailsNeverFails()
