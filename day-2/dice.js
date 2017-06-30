var dice = process.argv[2];

function howManyDice(dice) {
  var randomDice = [];
  for (var i = 0; i < dice; i++) {
    var randNum = Math.floor(Math.random() * 6) + 1;
    randomDice.push(randNum);
  }
  return randomDice.join(", ");
}

console.log("Rolled " + dice + " dice: " + howManyDice(dice) + ".");