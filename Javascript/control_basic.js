var getDieRoll = function(dieSize) {
  var result = Math.ceil(dieSize * Math.random());
  return result;
};

//Arrays
var things = [1, 2, 3, "pizza"];

for (var i = 0; i < things.length; i++) {
  console.log(things[i]);
}

for (var i = 0; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}
var roll = getDieRoll(6);

// Execute atleast once
do {
  console.log("Do Re-Rolling");
  roll = getDieRoll(6);
} while (roll > 4)

// Not necessarily Execute atleast once
while(roll < 4) {
    console.log("Re-Rolling");
    roll = getDieRoll(6);
}

// For loop
for (var i = 0; i < 4; i++) {
  console.log("For Rolling again");
  roll = getDieRoll(6)
}


if(roll >= 2 && roll <= 3) {
  console.log("Great roll!");
}

if(roll == 6 || roll == 1) {
  console.log("Nice!");
}

if(roll >=3 && roll <= 5) {
	console.log("Great roll!");
}
else if(roll == 1) {
	console.log("Terrible roll");
}
else{
	console.log("That was an ok roll");
}

console.log(("You rolled a " + roll));
