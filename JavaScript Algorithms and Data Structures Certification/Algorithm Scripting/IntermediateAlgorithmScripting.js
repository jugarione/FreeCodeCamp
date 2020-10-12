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



// Sum All Primes



// Smallest Common Multiple



// Drop it



// Steamroller



// Binary Agents



// Everything Be True



// Arguments Optional



// Make a Person



// Map the Debris

