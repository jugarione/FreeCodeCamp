/* Hello, this is all the exercices I made in FCC (FreeCodeCamp) Roadmap
   I make them all by myself with research in google and redoing courses in FCC
   so i can say that's all my work, and not a copyfrom others.
*/

// Introduction to the Intermediate Algorithm Scripting Challenges



// Sum All Numbers in a Range



// Diff Two Arrays



// Seek and Destroy


// Wherefore art thou


// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {

   let replaced = str.replace(/([a-z])([A-Z])/g, '$1 $2')
   let split = replaced.split(/\W|_/);

   console.log(split);
   let result = split.join("-");
   let lowerCase = result.toLowerCase();
   console.log(lowerCase)
   return lowerCase;
}
/* The results i have to make it work
spinalCase("This Is Spinal Tap")
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")
*/

// Pig Latin

/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {

   let arr = str.split("");
   let consonantRegex = /[bcdfghjklmnpqrstvwxys]+/i;
   let vowelRegex = /[aeiou]/gi;
   let result;

   function allStartConsonant(array) {
      let consonantCluster = [];
      for (let i = 0; i < array.length; i++) {
         if (consonantRegex.test(arr[0]) == true) {

            consonantCluster.push(arr.shift());
         } else {
            return consonantCluster.join("");
         }
      }
      return consonantCluster.join("");
   }


   if (str.search(vowelRegex) == -1) {
      arr.push("ay")
      result = arr.join("");
      return result;
   }


   if (consonantRegex.test(arr[0]) == true) {
      let first = allStartConsonant(arr);
      arr.push(first + "ay")
      result = arr.join("");
   } else {
      arr.push("way");
      result = arr.join("")
   }
   return result;
}
// console.log(translatePigLatin("consonant"));
/*
   translatePigLatin("consonant");
*/


// Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

   let beforeRegex = new RegExp(before);
   let beforeCase = str.match(beforeRegex);

   if (before[0] == before[0].toLowerCase()) {
      after = after.toLowerCase();
   } if (before[0] == before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1)
   }

   let result = str.replace(before, after)
   return result;
}

/*
Expected Results
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
Passed
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
Passed
myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".
Passed
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
Passed
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
Passed
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/


// DNA Pairing
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {

   let dispairElements = str.split("");
   let result = [];

   for (let i = 0; i < dispairElements.length; i++) {
      switch (dispairElements[i]) {
         case "G":
            result.push(["G", "C"]);
            break;
         case "C":
            result.push(["C", "G"]);
            break;
         case "T":
            result.push(["T", "A"]);
            break;
         case "A":
            result.push(["A", "T"]);
            break;
      }
   }

   return result;
}

/*
Expected Results

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

// Missing letters
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
   let baseRangue = "abcdefghijklmnopqrstuvwxyz";
   let firstElement = baseRangue.indexOf(str[0]);
   let lastElement = firstElement + str.length;

   for (let i = firstElement; i < lastElement; i++) {
      if (str.indexOf(baseRangue[i]) == -1) {
         return baseRangue[i];
      }
   }
}
/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

// Sorted Union
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
*/


function uniteUnique(...arr) {
   let allTogether = [];
   let result = [];

   allTogether = allTogether.concat(...arr);

   for (let i = 0; i < allTogether.length; i++) {
      if (result.lastIndexOf(allTogether[i]) == -1) {
         result.push(allTogether[i]);
      }
   }
   return result;
}

/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

// Convert HTML Entities
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
   let regex = new RegExp(/&|<|>|"|'/g)

   let match = str.match(regex)
   let result = str;

   if (match !== null) {
      for (let i = 0; i < match.length; i++) {
         switch (match[i]) {
            case '&':
               result = str.replace("&", "&amp;");
               break;
            case '<':
               result = result.replace("<", "&lt;");
               break;
            case '>':
               result = result.replace(">", "&gt;");
               break;
            case '"':
               result = result.replace('"', "&quot;");
               break;
            case "'":
               result = result.replace("'", "&apos;");
               break;
         }
      }
   }

   console.log(result);
   return result;
}

/*
convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
convertHTML("Schindler's List") should return "Schindler&apos;s List".
convertHTML("<>") should return "&lt;&gt;".
convertHTML("abc") should return "abc".
*/


// Sum All Odd Fibonacci Numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
   let fib = [0, 1]
   fibArray();

   function fibArray() {
      if (fib[fib.length - 1] > num) {
         fib.pop() //delete the last element because is bigger than num
         return;
      } else {
         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
         return fibArray();
      }
   }

   let onlyOdd = fib.filter(int => int % 2);
   let result = onlyOdd.reduce((back, int) => back + int, 0);

   console.log(fib)
   return result;
}

/*
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/


// Sum All Primes
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {

   let numbersList = [];

   for (let i = 2; i <= num; i++) {
      numbersList.push(i);
   }

   let onlyPrimes = numbersList.filter(int => {
      for (let i = 2; i < int; i++) {
         if (int % i === 0) return false;
      }
      return true;
   })
   let result = onlyPrimes.reduce((back, post) =>
      back + post)

   return result;
}

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

// Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {

   let numArr = [];
   let result = [];
   // numArr have all the numbers between arr[0] and arr[2]
   function arrNum() {
      if (arr[0] < arr[1]) {
         for (let i = arr[0]; i <= arr[1]; i++) {
            numArr.push(i);
         }
      } else {
         for (let i = arr[1]; i <= arr[0]; i++) {
            numArr.push(i);
         }
      }
   }
   arrNum()

   //

   for (let mul = 1; mul <= 99999999; mul++) {
      result = [];
      for (let i = 0; mul % numArr[i] === 0; i++) {
         result.push(true)
         if (result.length == numArr.length) {
            console.log(mul);
            return mul;
         }
      }
   }
   return arrNum;
}

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/


// Drop it
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {

   for (let i = 0; i < arr.length; i) {
      if (func(arr[i]) == true) {
         return arr;
      } else {
         arr.shift()
         console.log(arr)
      }
   }
   return arr;
}

/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/


// Steamroller

/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
   let flat = [].concat(...arr);
   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

// Binary Agents
/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

// i didn't know that String.fromCharCode() exist. but i like my solution, so i keep it!

function binaryAgent(str) {

   let alphabet = "abcdefghijklmnopqrstuvwxyz"
   let simbols = " !\"#$%&'()*+,-./0123456789:;<=>?@"
   let toProcess = str.split(" ")
   let result = [];

   toProcess.map(item => {
      let letter = 0;
      (item[7] == 1 ? letter = letter + 1 : null);
      (item[6] == 1 ? letter = letter + 2 : null);
      (item[5] == 1 ? letter = letter + 4 : null);
      (item[4] == 1 ? letter = letter + 8 : null);
      (item[3] == 1 ? letter = letter + 16 : null);
      (item[1] == 0 ? result.push(simbols[letter]) : (item[2] == 1 ? result.push(alphabet[letter - 1]) : result.push(alphabet[letter - 1].toUpperCase())));
   });
   return result.join("");
}

/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
should return "I love FreeCodeCamp!"
*/

// Everything Be True



// Arguments Optional



// Make a Person



// Map the Debris

