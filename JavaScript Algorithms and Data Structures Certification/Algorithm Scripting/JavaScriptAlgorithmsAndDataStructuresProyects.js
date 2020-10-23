/* Hello, this is all the exercices I made in FCC (FreeCodeCamp) Roadmap
   I make them all by myself with research in google and redoing courses in FCC
   so i can say that's all my work, and not a copyfrom others.
*/

// JavaScript Algorithms and Data Structures Projects


//Palindrome Checker
/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {
    let test = "HoLacomoestas"
    let lowerCase = str.toLowerCase()
    let testerLetter = new RegExp(/[A-Za-z0-9]/)
    let testedLetter = []
    // make an only letter word
    for (let i = 0; i < lowerCase.length; i++) {
        if (testerLetter.test(lowerCase[i])) { testedLetter.push(lowerCase[i]) };
    }

    let clean = testedLetter.join("")
    // test Palindrome.
    for (let i = 0; i < clean.length; i++) {
        if (clean[i] == clean[clean.length - 1]) {
            clean = clean.slice(0, -1)
        } else {
            return false;
        }
    }
    return true;
}

/*
palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|_/|four") should return false.
*/

//Roman Numeral Converter
/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let romanNumber = [];
    let number = num
    while (number > 0) {
        if (number >= 1000) {
            romanNumber.push("M");
            number = number - 1000;
        } else if (number >= 900) {
            romanNumber.push("CM");
            number = number - 900;
        } else if (number >= 500) {
            romanNumber.push("D");
            number = number - 500;
        } else if (number >= 400) {
            romanNumber.push("CD");
            number = number - 400;
        } else if (number >= 100) {
            romanNumber.push("C");
            number = number - 100;
        } else if (number >= 90) {
            romanNumber.push("XC");
            number = number - 90;
        } else if (number >= 50) {
            romanNumber.push("L");
            number = number - 50;
        } else if (number >= 40) {
            romanNumber.push("XL");
            number = number - 40;
        } else if (number >= 10) {
            romanNumber.push("X");
            number = number - 10;
        } else if (number >= 9) {
            romanNumber.push("IX");
            number = number - 9;
        } else if (number >= 5) {
            romanNumber.push("V");
            number = number - 5;
        } else if (number >= 4) {
            romanNumber.push("IV");
            number = number - 4;
        } else if (number >= 1) {
            romanNumber.push("I");
            number = number - 1;
        }
    }

    return romanNumber.join("");
}

/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

//Caesars Cipher
/*

*/



/*

*/
//Telephone Number Validator
/*

*/



/*

*/
//Cash Register
/*

*/



/*

*/


