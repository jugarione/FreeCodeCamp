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



// DNA Pairing



// Missing letters



// Sorted Union



// Convert HTML Entities



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

