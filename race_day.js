let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
//const registeredEarly = true; //for testing

const age = 18; //You'll change this later as you test different runner conditions.

if (age > 18 && registeredEarly){
  raceNumber += 1000
}

if (age > 18 && registeredEarly){
  console.log(`You race starts at 9:30am and your raceNumber is ${raceNumber}`);
}else if (age > 18 && !registeredEarly){
  console.log(`Your race will start at 11:00am. You raceNumber is ${raceNumber}.`);
  
}else if (age < 18) {
  console.log(`The race begins at 12:30. Your raceNumber is ${raceNumber}.`)
}else{
  console.log(`Your race number is ${raceNumber}.`)
}

/* Test the following conditions to test your code works as expected. 
Runners who are 25 years old and registered early will run at 9:30 am.
Runners who are 25 years old and did NOT register early will run at 11:00 am.
Runners who are 16 years old and registered early will run at 12:30 pm.
Runners who are 16 years old and did NOT register early will run at 12:30 pm. */
