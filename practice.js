// Define a const variable to kelvin.
const kelvin = 0;
/* Define a const variable to celsius where we subtract 273 from kelvin to get the conversion to celsius. */
const celsius = kelvin - 273;
// set fahrenheit conversion below:
let fahrenheit = celsius * (9 / 5) + 32;
// Round the number down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);