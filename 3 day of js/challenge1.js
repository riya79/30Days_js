//Q-1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName ="Shruti",lastName="Agarwal",country="India",city="Kota", isMarried = false,year = 2023;
console.log("Type of Firstname : " +typeof(firstName)+"\ntype of Lasttname : " +typeof(lastName)+"\ntype of country : " +typeof(country)+"\ntype of city : " +typeof(city)+"\ntype of isMarried : " +typeof( isMarried )+"\ntype of year : " +typeof(year));
//Q-2 Check if type of '10' is equal to 10
let num1 = '10',num2 = 10;
typeof(num1) === typeof(num2)?console.log("type of both is equal"):console.log("type of both is unequal");
//or
console.log(num1 ==num2);
//Q-3 Check if parseInt('9.8') is equal to 10
console.log("Value is : ")
parseInt('9.8')===10?console.log(true):console.log(false);
//Q-4 Boolean value is either true or false.
//(i) Write three JavaScript statement which provide truthy value.
console.log(2 == 3);
console.log(2<3);
console.log(3/2 === 1.5)
//(ii) Write three JavaScript statement which provide falsy value.
console.log(2 === 3);
console.log(2 !== 2);
console.log(5<4);
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//1. 4 > 3 -- true
console.log(4>3);
//2. 4 >= 3 -- true
console.log(4>=3);
//3. 4 < 3 -- false
console.log(4<3);
//4. 4 <= 3 -- false
console.log(4<=3);
//5. 4 == 4 -- true
console.log(4==4);

//6. 4 === 4 -- true
console.log(4===4);


//7. 4 !== 4 -- false
console.log(4!==4);

//8. 4 !== 4 -- false
console.log(4!==4);
//9. 4 != '4'-- false
console.log(4!='4');
//10. 4 == '4' -- true
console.log(4 == '4');
//11. 4 === '4' -- false
console.log(4 === '4');
//12.Find the length of python and jargon and make a falsy comparison statement.
 console.log("python".length !== "jargon".length);
 // Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12-- T
console.log(4 > 3 && 10 < 12);
// 4 > 3 && 10 > 12-- F
console.log(4 > 3 && 10 > 12);
// 4 > 3 || 10 < 12-- T
console.log(4 > 3 || 10 < 12);
// 4 > 3 || 10 > 12--T
console.log(4 > 3 || 10 > 12);
// !(4 > 3)-- F
console.log(!(4 > 3));
// !(4 < 3)-- T
console.log( !(4 < 3));
// !(false)-- T
console.log(!(false))
// !(4 > 3 && 10 < 12) -- F
console.log(!(4 > 3 && 10 < 12) )
// !(4 > 3 && 10 > 12) -- T
console.log(!(4 > 3 && 10 > 12))
// !(4 === '4') -- T
console.log(!(4 === '4'))
// There is no 'on' in both dragon and python -- F
console.log(!("dragon".includes("on") && "python".includes("on")));
// Use the Date object to do the following activities
const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth() + 1);
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());