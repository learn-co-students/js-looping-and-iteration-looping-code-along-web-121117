// Code your solutions in this file
function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}

// function tailsNeverFails(){
  // coin_sides = ["Heads","Tails"]
  // let coin = coin_sides[Math.floor(Math.random() * coin_sides.length)]
  // let counter = 0
  // while(coin === "Tails"){
  //   counter++
  //   coin = coin_sides[Math.floor(Math.random() * coin_sides.length)]
  // }
  // return `You got ${counter} tails in a row!`
// }
function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let count = 0
  while (maybeTrue()) {
    count += 1
  }
  return `You got ${count} tails in a row!`
}
