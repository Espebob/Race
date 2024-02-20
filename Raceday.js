//Generate a random race number
let raceNumber = Math.floor(Math.random() * 1000);

//Variable to indicate whether a runner registered early or not
const registeredEarly = true;

//Variable for the runner's age
const age = 55;

//Check if the runner is an adult and registered early
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

//Check race time for runners over 18 who registered early
if (age > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} 
//Check race time for late adult runners over 18
else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} 
//Check race time for youth registrants
else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} 
//Handle runners exactly 18 years old
else if (age === 18) {
  console.log('Please see the registration desk for your race time.');
}