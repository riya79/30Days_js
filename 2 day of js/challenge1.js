// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";
//2. Print the string on the browser console using console.log()
console.log(challenge);
// 3.Print the length of the string o;n the browser console using console.log()
console.log("the length of string is :" + challenge.length);
// 4.Change all the string characters to capital letters using toUpperCase() method
console.log("the uppercase of string is: " + challenge.toUpperCase());

// 5.Change all the string characters to lowercase letters using toLowerCase() method
console.log("the lowercase of string is: " + challenge.toLowerCase());
// 6.Cut (slice) out the first word of the string using substr() or substring() method
console.log("slice using substr(): " + challenge.substr(0, 2));
console.log("slice using substring(): " + challenge.substring(0, 2));
// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("slice using substring(): " + challenge.substr(3, 4));
// 8.Check if the string contains a word Script using includes() method
console.log("string contains 'Script' word : " + challenge.includes("Script"));
// 9.Split the string into an array using split() method
console.log("split() method : " + challenge.split(""));
// 10.Split the string 30 Days Of JavaScript at the space using split() method
console.log("split() method : " + challenge.split(" "));
// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let ItCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("split() method : " + ItCompanies.split(","));

// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("replace() method : " + challenge.replace("JavaScript", "Python"));
//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("character at index 15  : " + challenge.charAt(15));
//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(
  "character code of 'J'  : " + challenge.charCodeAt(challenge.indexOf("J"))
);
//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(" first occurrence of a   : " + challenge.indexOf("a"));
//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(
  " position of the last occurrence of a   : " + challenge.lastIndexOf("a")
);
//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(
  "position of the first occurrence of the word  'because' : " +
    sentence.indexOf("because")
);

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "position of the last occurrence of the word  'because' : " +
    sentence.lastIndexOf("because")
);

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "position of the first occurrence of the word  'because' : " +
    sentence.search("because")
);

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trim_sentence = " 30 Days Of JavaScript ";
console.log("trim spaces : " + trim_sentence.trim());

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("starts with make true : " + challenge.startsWith("30"));

// 22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("ends with make true : " + challenge.endsWith("JavaScript"));

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("match of all a's : " + challenge.match(/a/gi));

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let word = "30 Days of";
console.log("merge var word with JS : " + word.concat(" JavaScript"));

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));
