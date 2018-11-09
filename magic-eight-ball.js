// create a variable which is an ''
let userName = 'Benish';

// create a ternary for name entered/not.
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');
//Checked both with/out name and the logic works.

const userQuestion = 'Will I be a rockstar?';
console.log(userQuestion);
/* Math.random() returns a value btwn 0 (inclusive) and 1 (exclusive).
Since we want to have a wider range of numbers the value just needs to be multiplied by 8.
Finally, to ensure we only have whole numbers from 0 to 7 we can round down using Math.floor().
*/
const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Got with your gut!';
    break; 
}
console.log(eightBall);

