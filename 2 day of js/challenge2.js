//1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote1 =
  "There is no exercise better for the heart than reaching down and lifting people up.";
let author1 = " -By John Holmes";
let teaching1 = "Morale : This quote teaches us to help one another";
console.log(quote1 + "\n" + author1 + "\n" + teaching1);
//2.Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let quote2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same ";
let author2 = " -By Mother Teresa";
let teaching2 =
  "Morale: with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote2 + "\n" + author2 + "\n" + teaching2);
//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let one = "10",
  two = 10;
let result = console.log("old result: " + (typeof one == typeof two));
let new_result = parseInt(one);
console.log("new_result: " + (typeof new_result == typeof two));

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let a = parseFloat('9.8');
console.log(a == 10 ? true:a == Math.ceil('9.8'));
console.log("New value of a :"+ Math.ceil(a));
//5. Check if 'on' is found in both python and jargon
let str1 = 'python', str2 = 'jargon';
console.log(str1.includes('on') && str2.includes('on'));

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let str3 = 'I hope this course is not full of jargon.';
console.log(str3.includes('jargon'));

//7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101));
//8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 16) + 5);


//9. Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random()*256));


// Access the 'JavaScript' string characters using a random number.
let str_random = 'JavaScript';
let length = str_random.length;
console.log(str_random[Math.floor(Math.random() * length)]);
//10. Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

for (let n1 = 1; n1 < 6; n1++) {
    console.log(`${n1}\t${1}\t${n1}\t${n1**2}\t${n1**3}`);
};
//11. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
 let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
 console.log(sentence1.substr(sentence1.indexOf('because'),'because because because'.length));