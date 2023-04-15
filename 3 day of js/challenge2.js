// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");

if (isNaN(base) || isNaN(height)) {
  console.log("Invalid input");
} else {
  base = parseFloat(base);
  height = parseFloat(height);
  const area = 0.5 * base * height;
  console.log("The area of the triangle is: " + area);
}
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let sidea = prompt("Enter length of side a: ");
let sideb = prompt("Enter length of side b: ");
let sidec = prompt("Enter length of side c: ");
if (isNaN(sidea) || isNaN(sideb) || isNaN(sidec)) {
  console.log("Invalid input");
} else {
  sidea = parseFloat(sidea);
  sideb = parseFloat(sideb);
  sidec = parseFloat(sidec);

  const perimeter = sidea + sideb + sidec;
  console.log("The perimeter of the triangle is: " + perimeter);
}
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");

if (isNaN(length) || isNaN(width)) {
  console.log("Invalid input");
} else {
  length = parseFloat(length);
  width = parseFloat(width);

  const area = length * width;
  const perimeter = 2 * (length + width);

  console.log("The area of the rectangle is: " + area);
  console.log("The perimeter of the rectangle is: " + perimeter);
}

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius of the circle:");

if (isNaN(radius)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  radius = parseFloat(radius);

  const pi = 3.14;
  const area = pi * radius * radius;
  const circumference = 2 * pi * radius;

  console.log(`The area of the circle is: ${area}`);
  console.log(`The circumference of the circle is: ${circumference}`);
}

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// const equation = prompt("Enter an equation in the form y = mx + b:");
const equation = prompt("Enter an equation in the form y = mx + b:");
const parts = equation.split(" ");
const m = parseFloat(parts[2]);
const b = parseFloat(parts[4]);

if (!isNaN(m) && !isNaN(b)) {
  console.log(`Slope: ${m}`);
  console.log(`x-intercept: ${-b / m}`);
  console.log(`y-intercept: ${b}`);
} else {
  console.log("Invalid input. Please enter a valid equation.");
}

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2,
  x2 = 6,
  y1 = 2,
  y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(`Slope is ${slope2}`);
// Compare the slope of above two questions.
m > slope2
  ? console.log("slope1 is greater than slope 2 ")
  : console.log("slope2 is greater than slope 1 or  equal");
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let y = parseFloat(prompt("enter value of x "));
let eq = (y = x ** 2 + 6 * x + 9);
console.log("value of y is" + y);
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseFloat(prompt("enter hours:"));
let rph = parseFloat(prompt("enter rph:"));
pay = hours * rph;
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
console.log(`Enter hours:${hours}`);
console.log(`Enter rate per hour:${rph}`);
console.log(`Your weekly earning is:${pay} Rs.`);
// If the length of your name is greater than 7 say, your name is long else say your name is short.
let YN = prompt("Enter your name : ");
YN.length > 7
  ? console.log("Your name is long")
  : console.log("Your name is short.");
// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let YFirstName = prompt("Enter your firstname : ");
let YLastName = prompt("Enter your lastname : ");
YFirstName.length > YLastName.length
  ? console.log(
      `Your first name ${YFirstName} is longer than your family name, ${YLastName}`
    )
  : console.log(
      `Your first name ${YFirstName} is shorter than your family name, ${YLastName}`
    );
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = parseInt(prompt("myAge is :"));
let yourAge = parseInt(prompt("yourAge is :"));
myAge >= yourAge
  ? console.log(`I am ${myAge - yourAge} years older than you.`)
  : console.log(`I am ${yourAge - myAge} years younger than you.`);
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive
let now = new Date();
let year = now.getFullYear();

let birthYear = parseInt(prompt("Enter birth year:"));
let childAge = year - birthYear;
console.log("Enter birth year :" + birthYear);
if (isNaN(birthYear)) {
  console.log("Invalid input. Please enter a valid birth year.");
} else {
  if (childAge >= 18) {
    console.log(`You are ${childAge}. You are old enough to drive.`);
  } else if (childAge >= 0) {
    console.log(
      `You are ${childAge}. You will be allowed to drive after ${
        18 - childAge
      } years.`
    );
  } else {
    console.log("Invalid input. Please enter a valid birth year.");
  }
}
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
let YearsYouLive = parseFloat(prompt("Enter number of years you live:"));

console.log("Enter number of years you live:" + YearsYouLive);
console.log(`You lived ${now.getTime()} seconds.`);
// Create a human readable time format using the Date time object
const YYYY = now.getFullYear(); // return year
const MM = now.getMonth() + 1; // return month(0 - 11)
const DD = now.getDate(); // return date (1 - 31)
const Hours = now.getHours(); // return number (0 - 23)
const Minutes = now.getMinutes(); // return number (0 -59)
// YYYY-MM-DD HH:mm
console.log(`${YYYY}-${MM}-${DD} ${Hours}:${Minutes}`);
// DD-MM-YYYY HH:mm
console.log(`${DD}-${MM}-${YYYY} ${Hours}:${Minutes}`);
// DD/MM/YYYY HH:mm
console.log(`${DD}/${MM}/${YYYY} ${Hours}:${Minutes}`);
