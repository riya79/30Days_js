//1. Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let str_a =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str_a.match(/love/gi).length);
//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str_b =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str_b.match(/because/gi).length);

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sen_tence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
let regex = /[@!#$%^&;]/g;
console.log(sen_tence.replace(regex, ""));

//4. Calculate the total annual income of the person by extracting the numbers from the following text.
const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regEx = /\d+/g;
let result_s = text.match(regEx);
let sum = 0;
for (let i = 0; i < result_s.length; i++) {
  sum += Number(result_s[i]);
}
console.log("the total annual income of the person is : " + sum);
