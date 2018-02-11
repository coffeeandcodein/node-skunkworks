var dice = require("./dice")
var die = dice.game;

die.size = 10;

console.log(die.size);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
console.log(die);
