// Code your solutions in this file


function tailsNeverFails(){
  counter = 0
  while (Math.random() >= 0.5)
    counter++;
  return "You got " + counter + " tails in a row!"
}

function printBadges(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
     }
  return arr;
}
